# Libertarian Party of Monroe County (monroelpin.org)

This is the marketing and blog site for the Monroe County affiliate of the Libertarian Party of Indiana.

*At present, the site has no styling or content.*

## Getting Started

The project was started with node version 16.13.0. It's built using [Gatsby](https://www.gatsbyjs.com/).

### 0. Prerequisties

You need [Node.js](https://nodejs.org/en/), probably on major version 16. [NVM](https://github.com/nvm-sh/nvm) could be useful for this.

### 1. Install Dependencies

```
npm install
```

### 2. Run the development server

```
npm run start
```

You should now be able to visit http://localhost:8000.

### 3. Making content changes

New blog posts can be added by adding a markdown file in `blog/*/index.md` (e.g. `blog/my-second-post/index.mdx would create http://localhost:8000/blog/my-second-post/). New "main" pages can be added by creating a file in `src/pages` (e.g. `src/pages/contact.js` would create http://localhost:8000/contact/).

## Deploying Changes

The site is intended to be deployed on the `gh-pages` branch from the `public` directory. However, the `gh-pages` branch is not intended to be modified directly. Instead, to deploy changes, just run the deploy script below on your local machine from the branch that has the changes you want to deploy (e.g. on your computer from `master`):

### 1. Run the deploy script

```
npm run deploy
```