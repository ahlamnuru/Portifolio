# My Portfolio

This is my personal portfolio website. I built it for my bootcamp to practice React Router, and it is also the place where I show my projects to people.

Live site: https://your-site.vercel.app

## What it is

The site has four pages: home, about, projects and contact. The home page shows who I am, my tools in a moving row, and three of my best projects. The about page tells a little about me and shows my learning path. The projects page shows all my projects, and you can click a tool like React or Tailwind to see only the projects that use it. Every project also has its own page with more details and a link to the code. The contact form sends a message straight to my email. There is also a button to switch between night and light mode.

## What I used

I used React with TypeScript, Vite, Tailwind CSS and React Router. The icons are from react-icons, and the contact form uses Formspree.

## What I practiced

The main goal was React Router, so I used a shared layout with an Outlet so the menu stays the same on every page. I made a dynamic route like /projects/:id and read the id with useParams to find the right project. For the filter I used useSearchParams, so the selected tool is saved in the address and you can share the link. I also made a 404 page for wrong addresses.

## How to run it

```bash
pnpm install
pnpm dev
```

Then open the link that shows in the terminal.

## What I want to add later

I want to add more project screenshots, write more about each project, and maybe add a small blog.