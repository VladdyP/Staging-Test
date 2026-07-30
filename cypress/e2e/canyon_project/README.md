# Canyon Project

Base URL: `https://www.canyon.com/en-us/`

Folder structure:

- `home page`
- `shop`
- `why canyon`
- `ride with us`
- `support`

Shared Canyon actions live in `cypress/support/pageObjects/canyonPage.js`.

Use `canyonPage.saveCookiePopupChoice()` in a `before()` hook for Canyon specs so the cookie popup is accepted once and reused across future Canyon tests in the same Cypress run.
