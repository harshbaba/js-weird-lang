https://nextjs.org/learn/basics/create-nextjs-app

================React SSR Commands===

npm run dev
    Starts the development server.

npm run build
    Builds the app for production.

npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

nextjs-blog
  npm run dev

===

1.Create a New Page
Create the posts directory under pages.

Create a file called first-post.js inside the posts directory with the following contents:

export default function FirstPost() {
  return <h1>First Post</h1>
}
The component can have any name, but you must export it as a default export.
http://localhost:3000/posts/first-post. You should see the page:

2.Link Component
import Link from 'next/link'

