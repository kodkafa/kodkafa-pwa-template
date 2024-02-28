# React (PWA) + Tailwind + TypeScript + Vite

This template provides a setup to get React (PWA) working in Vite with HMR and 
KODKAFA ESLint rules.

### Before you start coding
- If you don't plan to use GitHub Actions, delete the _.github_ directory. CI runs on the GitHub Actions.
- If you don't plan to use Vercel, remove the _Analytics_ in _src/layout/System.layout.ts_ file.
- Clean up the _cypress/e2e/index.spec.ts_ file.
- Change the _favicon.svg_ and generate others from it via `pnpm run pwa:assets`. 
- Taking screenshots run `pnpm run pwa:ss`. It takes ss via Cypress. You can find details _cypress/e2e/screenshot.spec.ts_ file. 
- Change the _title_ etc. in the **index.html** and **vite.config.ts**. 
The _Montserrat_ and _Bebas+Neue_ fonts are included, so remove it if you want.
- Modify or delete the _LICENSE_ file.
- Change the _name_ and _description_ fields in __package.json__.
- Modify the _vite.config.ts_ file.
- If you want "auto update", change `registerType: 'autoUpdate'` and `filename: 'claims-sw.ts'` in _vite.config.ts_ and remove ReloadPrompt in _src/layout/System.layout.ts_ file.

__Features:__
- [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa) prompt or autoUpdate
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- Typescript 5.3
- Tailwindcss 3 _(+darkMode)_
- [Fontello](https://fontello.com/) for icons
- [Google Fonts](https://fonts.google.com/)
- React Router 6
- i18next + i18next-parser
- @kodkafa/eslint-config
- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io/) for E2E
- @vercel/analytics
- [Vite 5](https://vitejs.dev/)


### Export locale files
```
    pnpm run localize
```

### Export assets and screenshots
```
    pnpm run pwa:assets
    pnpm run pwa:ss
```

### Test
```
    pnpm run test
    pnpm run test:e2e
```
