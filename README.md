# Next.js Routing Project

This project is designed to practice implementing parallel routing in a Next.js application using React and TypeScript.

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/next-news
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

4. **Open Your Browser:**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

The project structure is organized as follows:

```
app/
├── (content)/
│   ├── archive/
│   │   ├── [[...filter]]/
│   │   │   └── page.tsx
│   │   ├── @archive/
│   │   ├── error.tsx
│   │   └── latest/
│   │       ├── default.tsx
│   │       └── layout.tsx
│   └── news/
│       ├── [slug]/
│       │   ├── @modal/
│       │   │   └── (.)image/
│       │   │       ├── default.tsx
│       │   │       ├── image/
│       │   │       │   ├── layout.tsx
│       │   │       │   ├── not-found.tsx
│       │   │       │   └── page.tsx
│       │   │       └── page.tsx
│       │   ├── not-found.tsx
│       │   ├── page.tsx
│       │   └── layout.tsx
│       └── not-found.tsx
├── (home)/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── assets/
├── components/
│   └── ui/
│       ├── modal.tsx
│       ├── nav-link.tsx
│       ├── main-header.tsx
│       └── news-list.tsx
├── lib/
│   └── news.ts
├── public/
├── types/
│   ├── ArchiveLayout.ts
│   ├── Errors.ts
│   ├── FilteredNews.ts
│   ├── Image.ts
│   ├── InterceptedImage.ts
│   ├── Modal.ts
│   ├── NavLink.ts
│   ├── News.ts
│   ├── NewsDetail.ts
│   └── NewsDetailLayout.ts
├── .eslintrc.json
├── .gitignore
├── dummy-news.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
└── package.json
```

### Explanation of `[[...filter]]` in the Archive Directory

In the `archive` directory, the `[[...filter]]` folder is used to create a dynamic route that can handle multiple optional parameters. This feature, provided by Next.js, allows you to capture all segments of a URL after `/archive/` as an array and process them accordingly. For example, navigating to `/archive/category1/subcategory2` will capture `["category1", "subcategory2"]` in the `filter` array.

This is useful for creating flexible and SEO-friendly URLs for filtering or searching content without needing to define a fixed number of route parameters.

### Parallel Routing

This project demonstrates how to implement parallel routing, allowing multiple routes to be accessed simultaneously. This feature enables users to navigate to different pages without disrupting the current page's functionality.

### Intercepting Routes

Intercepting routes in this project are used to enhance user experience by allowing you to display different components or layouts based on specific conditions without fully navigating away from the current page. In your project, you have used intercepting routes in the `news/[slug]/@modal/(.)image` directory.

Here's how it works:

- The `news/[slug]` directory represents the dynamic route for news articles, where `[slug]` is a placeholder for the article identifier.
- Inside `news/[slug]`, the `@modal` directory is used to create an intercepting route.
- The `(.)image` directory inside `@modal` is used to define a route that intercepts the current route to display a modal.
- Within `(.)image`, the `default.tsx`, `image/layout.tsx`, `image/not-found.tsx`, and `image/page.tsx` components define how the modal content is structured and displayed.

## Technologies Used

- **Next.js**: The React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
