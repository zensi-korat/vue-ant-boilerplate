This is a VueJS + Ant Design + Sass boilerplate.

## Tech Stack

**Client:** [VueJs](https://vuejs.org/), typescript

**Styling:** [AntdVue](https://antdv.com/docs/vue/introduce), [Storybook](https://storybook.js.org/), Sass

**Code Formatter:** [Prettier](https://prettier.io/), [Eslint](https://eslint.org/)

## Developer Guide

&nbsp;&nbsp;1. This boilerplate has been setup with Dashboard Layout for admin pages with header, sidebar and content.

&nbsp;&nbsp;2. You can modify the ant design tokens in token.ts file.

&nbsp;&nbsp;3. You can add color variables in \_variable.scss file as per according to your project.

&nbsp;&nbsp;3. You can add mixins in \_mixins.scss file as per according to your project.

&nbsp;&nbsp;4. For theming we have added two themes i.e. default and dark.

&nbsp;&nbsp;5. Prior to committing, ensure you verify and resolve linting issues by running the following commands:

- `npm run lint`
- `npm run lint:fix`

&nbsp;&nbsp;6. Add comments when necessary for better understanding, and make further improvements as needed.

&nbsp;&nbsp;7. Customize the ESLint rules in the .eslintrc.json file to meet your project's specific requirements.

## Getting Started

- Installation
  Run `npm ci` to install the dependencies. This will install the exact version of all the packages that were used while setting up the boilerplate thus avoiding any version incompatibility between packages.

- Setup husky
  Run `npx husky init` this will initialize husky in our project.
  Open `pre-commit` file which will be inside `.husky` folder and replace `npm run test` to `npm run lint`.

- You are ready to go. Run `npm run dev` to start the local server.

### Other useful scripts

- `npm run build` to build a project
- `npm run dev` to run (dev) a project
- `npm run build` to build a project
- `npm run preview` to run preview a project
- `npm run lint` to lint a project
- `npm run lint:fix` to lint:fix a project
- `npm run format` to format a project
- `npm run storybook` to start storybook dev server
- `npm run build-storybook` to build storybook
