# Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## First, run the development server:

```bash
yarn dev
```

//@@note: There's no need to pay for TailwindUI to use this project, all of the other packages are free.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing some of the pages by modifying them in `pages/`. The page auto-updates as you edit the file.

## Additional Information about the project:

This project is using Next.js, Tailwind, TailwindUI, HeadlesUI, Heroicons, Prisma, PrismaClient, Yup, ESLint, Prettier, Husky,

Zlatko Zlatkov creates the whole design, it is inspired by the menu of one local Bulgarian Bar and is implemented using TailwindUI components, HeadlesUI components, and Heroicons.

Next.js is chosen by the author for the main reason that the idea behind this project is to serve some small and medium-sized bars, restaurants, clubs, and other companies that are using menus for their businesses. So not so straight to the point Next.js is for full-stack Web applications with React features and server-side rendering, with simple words one of the best things right now for building a web application with prioritization on SEO optimizations.

Using Prettier for code formatting the whole project, ESLint to analyze code and quickly find problems before committing, and Husky for commits and git hooks.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed at [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Project Deployment

### on Vercel

The easiest way to deploy your website is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. The only problem is that you will be facing some limits. Like there is a maximum execution duration, so you cannot use web socket connections. The best way to create connections for accepting orders is the web socket.

Next.js deployment documentation(https://nextjs.org/docs/deployment) for more details.

### on Cloudflare

...

### on Firebase

...

### on Netlify

...

## DB Deployment

### on PlanetScale

...
