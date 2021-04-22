# Math.random() community portal [![Build Status](https://travis-ci.org/Math-random-javascript-community/portal.svg?branch=main)](https://travis-ci.org/Math-random-javascript-community/portal)

> The best community portal software 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Development

For commit your changes use commitizen tool with following command:
```bash
yarn commit
```
don't use `git commit` directly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Convert SVG icon to TSX components
We use icons as TSX components in components/common/Icon/inlineImages

To convert SVG images into TSX components use [SVGR](https://react-svgr.com) CLI utility.

Example: `npx @svgr/cli --template ./components/common/Icon/iconTpl.js --out-dir ./components/common/Icon/inlineImages ./public/icons`

