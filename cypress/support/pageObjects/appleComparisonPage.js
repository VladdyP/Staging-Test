class AppleComparisonPage {
  useDesktopViewport() {
    cy.viewport(1440, 900)
  }

  clickMacBookAirLink() {
    cy.log('Open MacBook Air from the Mac product navigation')
    cy.get('nav[aria-label="Mac Family of products"] a[href="/macbook-air/"][data-analytics-title="macbook air"]')
      .should('have.length', 1)
      .and('be.visible')
      .click()
  }

  verifyMacBookAirPage() {
    cy.location('pathname', { timeout: 30000 }).should('eq', '/macbook-air/')
    cy.title().should('include', 'MacBook Air')
  }

  followCompareLink() {
    cy.log('Open the MacBook Air comparison page')
    cy.get('a.ac-ln-menu-link[href="/macbook-air/compare/"][data-analytics-title="compare"]')
      .should('have.length', 1)
      .should('have.attr', 'href', '/macbook-air/compare/')
      .then(($link) => {
        cy.visit($link.prop('href'))
      })
  }

  openComparePage() {
    cy.log('Open the MacBook Air comparison page directly')
    cy.visit('https://www.apple.com/macbook-air/compare/')
    this.verifyComparePage()
  }

  verifyComparePage() {
    cy.location('pathname', { timeout: 30000 }).should('eq', '/macbook-air/compare/')
    cy.get('#page-title')
      .should('be.visible')
      .and('have.text', 'Compare Mac models')
  }

  getProductSelectors(expectedCount = 3) {
    return cy.get('[data-selector-table] select.selector-dropdown')
      .should('have.length', expectedCount)
      .and('be.visible')
  }

  selectProducts(productNames) {
    expect(productNames, 'products selected for comparison').to.have.length(3)
    expect(new Set(productNames).size, 'unique products selected for comparison').to.eq(3)

    productNames.forEach((productName, index) => {
      cy.log(`Select ${productName} for comparison`)
      this.getProductSelectors(productNames.length)
        .eq(index)
        .select(productName)
    })
  }

  verifyProductSelectorLimit(expectedCount) {
    this.getProductSelectors(expectedCount)
    cy.get('[data-selector-table] #selector-3').should('not.exist')
  }

  verifySelectedProducts(productNames) {
    productNames.forEach((productName, index) => {
      this.getProductSelectors(productNames.length)
        .eq(index)
        .find('option:selected')
        .should(($option) => {
          expect(this.normalizeText($option.text())).to.eq(productName)
        })
    })

    cy.get('.compare-header-row [role="columnheader"]')
      .should('have.length', productNames.length + 1)
      .then(($headers) => {
        productNames.forEach((productName, index) => {
          expect(this.normalizeText($headers.eq(index + 1).text())).to.eq(productName)
        })
      })
  }

  verifyProductsAreSideBySide(expectedCount) {
    cy.get('.section-finish .compare-row')
      .should('have.length', 1)
      .children('[role~="cell"].compare-column')
      .should('have.length', expectedCount)
      .should(($columns) => {
        const columnPositions = [...$columns].map((column) => column.getBoundingClientRect())
        const firstColumnTop = columnPositions[0].top

        columnPositions.forEach((position) => {
          expect(position.top, 'comparison column top position').to.be.closeTo(firstColumnTop, 1)
        })

        for (let index = 1; index < columnPositions.length; index += 1) {
          expect(columnPositions[index].left, 'comparison column horizontal position')
            .to.be.greaterThan(columnPositions[index - 1].left)
        }
      })
  }

  verifyRequiredComparisonDetails(productNames) {
    const productCount = productNames.length

    this.verifySelectedProducts(productNames)
    this.verifyProductImages(productCount)
    this.verifyDetailSection('.section-price', 'price', /\$\d/, productCount)
    this.verifyDetailSection('.section-compute', 'chip', /chip/i, productCount)
    this.verifyDetailSection('.section-display', 'display size', /\d+(?:\.\d+)?(?:-inch|″)/i, productCount)
    this.verifyDetailSection('.section-memory', 'memory', /\d+GB/i, productCount)
    this.verifyDetailSection('.section-storage', 'storage', /\d+(GB|TB)/i, productCount)
    this.verifyDetailSection('.section-power-and-battery', 'battery life', /\d+\s+(hours|hrs)/i, productCount)
  }

  verifyProductImages(expectedCount) {
    cy.get('.section-finish .compare-row')
      .should('have.length', 1)
      .children('[role~="cell"].compare-column')
      .should('have.length', expectedCount)
      .each(($column, index) => {
        return cy.wrap($column)
          .find('.gallery-image.active')
          .should('have.length', 1)
          .and('be.visible')
          .should(($image) => {
            expect(
              $image.css('background-image'),
              `background image for compared product ${index + 1}`
            ).to.match(/^url\(["']?.+["']?\)$/)
          })
          .then(($image) => {
            const backgroundImage = $image.css('background-image')
            const imageUrlMatch = backgroundImage.match(/^url\(["']?(.*?)["']?\)$/)
            const resolvedImageUrl = new URL(
              imageUrlMatch[1],
              $image[0].ownerDocument.baseURI
            ).href

            return new Cypress.Promise((resolve, reject) => {
              const browserImage = new $image[0].ownerDocument.defaultView.Image()

              browserImage.onload = () => {
                try {
                  expect(
                    browserImage.naturalWidth,
                    `natural width for compared product image ${index + 1}`
                  ).to.be.greaterThan(0)
                  expect(
                    browserImage.naturalHeight,
                    `natural height for compared product image ${index + 1}`
                  ).to.be.greaterThan(0)
                  resolve()
                } catch (error) {
                  reject(error)
                }
              }
              browserImage.onerror = () => {
                reject(new Error(
                  `Compared product image ${index + 1} failed to load: ${resolvedImageUrl}`
                ))
              }
              browserImage.src = resolvedImageUrl
            })
          })
      })
  }

  verifyDetailSection(sectionSelector, detailName, expectedPattern, expectedCount) {
    const getProductCells = (row) => {
      return [...row.querySelectorAll(':scope > [role~="cell"].compare-column')]
    }
    const findMatchingVisibleRow = ($rows) => {
      return [...$rows].find((row) => {
        const cells = getProductCells(row)

        if (!Cypress.$(row).is(':visible') || cells.length !== expectedCount) {
          return false
        }

        if (!cells.every((cell) => Cypress.$(cell).is(':visible'))) {
          return false
        }

        return cells.every((cell) => {
          return expectedPattern.test(this.normalizeText(cell.textContent))
        })
      })
    }

    cy.get(sectionSelector)
      .should('have.length', 1)
      .and('be.visible')
      .find('.compare-row')
      .should(($rows) => {
        expect(findMatchingVisibleRow($rows), `visible ${detailName} row`).to.exist
      })
      .then(($rows) => {
        const matchingRow = findMatchingVisibleRow($rows)

        cy.wrap(matchingRow)
          .should('be.visible')
          .children('[role~="cell"].compare-column')
          .should('have.length', expectedCount)
          .each(($cell) => {
            cy.wrap($cell).should('be.visible')
          })
          .then(($cells) => {
            [...$cells].forEach((cell, index) => {
              expect(
                this.normalizeText(cell.textContent),
                `${detailName} for compared product ${index + 1}`
              ).to.match(expectedPattern)
            })
          })
      })
  }

  normalizeText(text) {
    return text.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim()
  }
}

module.exports = new AppleComparisonPage()
