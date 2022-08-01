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

### 3. Add a blog post

New blog posts can be added by adding a markdown file in `blog/*/index.mdx`.

For instance, there's a dummy post set-up at `blog/hello-world/index.mdx`. To make the dummy blog post visible, change `draft` to `false`. The blog post will now be listed at the `/blog` route, and readable by visiting `/blog/hello-world` (e.g. http://localhost:8000/blog/hello-world).

To create an additional blog post, copy `blog/hello-world/index.mdx` as something like `blog/my-second-post/index.mdx`. Modify the meta information (the title, date, and other information between the `---` markers). Modify the content of the post below the second `---` marker. Ensure that `draft` is set to `true`.

### 4. Adding a main page

New "main" pages can be added by creating a file in `src/pages` (e.g. `src/pages/contact.js` would create http://localhost:8000/contact/).

## 5. Deploying Changes

To deploy the changes of your current local branch:

```
npm run deploy
```