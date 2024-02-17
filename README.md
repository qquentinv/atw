# atw (Around the world)

Ce projet a pour but de retracer les différents lieux que j'ai pu visiter. 

## Les raisons

Avant de commencer la réalisation de ce projet me suis dits pourquoi faire cet outil alors que google maps permet de se créer des cartes personnalisées.
Mais je me suis dit que : 
 - Ce serait quand même top de pouvoir auto-héberger la base de données que j'ai pu visiter (pas une confiance absolue en google en matière de privacy)
 - Ça s'inscrit dans ma démarche de me créer une plateforme globale qui va me permettre de gérer ses différentes petites choses qui nous facilitent la vie

## Usage

Le but de cet outil est d'être utilisé pour choisir une destination de vacances, 
ça permet de connaître en un coup d'oeil les villes ou les pays que l'on n'a pas encore eu l'occasion de visiter.

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
