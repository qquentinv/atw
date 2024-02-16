# atw (Around the world)

Ce projet a pour but de retracer les différents lieux que j'ai pu visiter. 

## Les raisons

Avant de commencer la réalisation de ce projet me suis dis pourquoi faire cette outils alors que google maps permet de ce créer des cartes personnalisées.
Mais je me suis dis que : 
 - se serait quand même top de pouvoir auto-héberger la base de données que j'ai pu visiter (pas une confiance absolu en google en terme de privacy)
 - sa s'inscrit dans ma démarche de me créer une plateforme global qui va me permettre de gérer ces différentes petites choses qui nous facilite la vie

## Usage

Le but de cette outils est d'être utilisé pour choisir une destination de vacances, 
ça permet de connaître en un coup d'oeil les villes ou les pays que l'on a pas encore eu l'occasion de visiter.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
