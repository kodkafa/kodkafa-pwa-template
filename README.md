# React (PWA) + Tailwind + TypeScript + Vite

This template provides a setup to get React (PWA) working in Vite with HMR and 
KODKAFA ESLint rules.

### Before you start coding
- If you don't plan to use GitHub Actions, delete the .github directory.
- Clean up the _cypress/e2e/index.spec.ts_ file.
- Change the _favicon.svg_ and generate others from it via `pnpm run pwa:assets`. 
- Taking screenshots run `pnpm run pwa:ss`. It takes ss via Cypress. You can find details _cypress/e2e/index.spec.ts_ file. 
- In the src folder, remove the __tests__, api and components folder and the types.ts file.
- If you don't plan to use react-query, remove the query client logic in the main.tsx file.
- Change the _title_ etc. in the **index.html** and **vite.config.ts**. 
The _Montserrat_ and _Bebas+Neue_ fonts are included, so remove it if you want.
- Modify or delete the _LICENSE_ file.
- Change the _name_ and _description_ fields in __package.json__.

__Features:__
- [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- Typescript 5.3
- Tailwindcss 3 _(+darkMode)_
- [Fontello](https://fontello.com/)
- React Router 6
- i18next + i18next-parser
- @kodkafa/eslint-config
- @vercel/analytics
- [Vite 5](https://vitejs.dev/)


### Export locale files
```
    pnpm run localize
```
