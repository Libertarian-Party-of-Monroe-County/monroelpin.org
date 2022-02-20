# Libertarian Party of Monroe County (monroelpin.org)

This is the marketing and blog site for the Monroe County affiliate of the Libertarian Party of Indiana.

## Getting Started

The project was started with node version 16.13.0. It's built using [Gatsby](https://www.gatsbyjs.com/). For the sake of consistent element styling, [React Material](https://mui.com/) is also being used for buttons, navbars, etc.

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

New blog posts can be added by adding a markdown file in `blog/*/index.md` (e.g. `blog/my-second-post/index.mdx` would create http://localhost:8000/blog/my-second-post/). New "main" pages can be added by creating a file in `src/pages` (e.g. `src/pages/contact.js` would create http://localhost:8000/contact/).

## Deploying Changes

To create a production build, run:

```
npm run build
```

The output to the `public` directory is the compiled site.