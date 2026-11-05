export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  codeurl: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id:"weather-now",
    title: "Weather Now",
    description: "A weather app that shows the weather for any city.",
    tech:["Html","Tailwind", "JS", "API"],
    codeurl: "https://github.com/ahlamnuru/Shiera-m2w4",
    image: "/src/images/weatherapp.png",
  },
    {
    id: "static-job-listings",
    title: "Static Job Listings",
    description: "A job listings page where you can filter jobs by role, level, languages and tools.",
    tech: ["Html", "Tailwind", "Vite"],
    codeurl: "https://github.com/ahlamnuru/Static_job_listing",
    image: "/src/images/job-listings-with-filtering.png",
  },
  {
    id: "notifications-page",
    title: "Notifications Page",
    description: "A notifications page where you can mark one or all notifications as read.",
    tech: ["React", "Tailwind", "JS"],
    codeurl: "https://github.com/ahlamnuru/notification-page",
    image: "/src/images/notifications-page.png",
  },
  {
    id: "browser-extensions-manager",
    title: "Browser Extensions Manager",
    description: "A page to turn extensions on or off, filter them, remove them and switch between light and dark mode.",
    tech: ["React", "TypeScript", "Tailwind"],
    codeurl: "https://github.com/ahlamnuru/Browser-Extension-Manager",
    image: "/src/images/browser-extensions-manager.png",
  },
  {
    id: "newsletter-sign-up",
    title: "Newsletter Sign-up",
    description: "A newsletter form that checks the email and shows a success message.",
    tech: ["React", "TypeScript", "Tailwind"],
    codeurl: "https://github.com/ahlamnuru/newsletter-signup",
    image: "/src/images/newsletter-sign-up.png",
  },
  {
    id: "advice-generator",
    title: "Advice Generator",
    description: "An app that shows a random piece of advice from the Advice Slip API.",
    tech: ["React", "TypeScript", "Tailwind", "API"],
    codeurl: "https://github.com/ahlamnuru/Advice-generator",
    image: "/src/images/advice-generator.png",
  },
  {
    id: "calculator-app",
    title: "Calculator App",
    description: "A calculator with three color themes.",
    tech: ["React", "TypeScript", "Tailwind"],
    codeurl: "https://github.com/ahlamnuru/-Calculator-App",
    image: "/src/images/calculator-app.png",
  },
  {
    id: "card-details-form",
    title: "Card Details Form",
    description: "A form that updates a card preview while you type and checks every input.",
    tech: ["React", "TypeScript", "Tailwind"],
    codeurl: "https://github.com/ahlamnuru/card-detail-form",
    image: "/src/images/card-details-form.png",
  },
  {
    id: "manage-landing-page",
    title: "Manage Landing Page",
    description: "A responsive landing page with a testimonials slider and a newsletter form.",
    tech: ["React", "TypeScript", "Tailwind"],
    codeurl: "https://github.com/ahlamnuru/manage-landing-page",
    image: "/src/images/manage-landing-page.png",
  },
  {
    id: "product-list-with-cart",
    title: "Product List with Cart",
    description: "A dessert shop where you can add items to a cart, change quantities and confirm an order.",
    tech: ["React", "TypeScript", "Tailwind"],
    codeurl: "https://github.com/ahlamnuru/Product-list",
   image: "/src/images/product-list-with-cart.png",
  },
  {
    id: "multi-step-form",
    title: "Multi-Step Form",
    description: "A four-step subscription form with plans, add-ons and a summary.",
    tech: ["React", "TypeScript", "Tailwind", "Context API", "useReducer"],
    codeurl: "https://github.com/ahlamnuru/multi-step-form",
    image: "/src/images/multi-step-form.png",
  },
  {
    id: "rest-countries",
    title: "REST Countries",
    description: "An app to explore countries with search, a region filter, a detail page and a theme switcher.",
    tech: ["React", "TypeScript", "Tailwind", "TanStack Query", "TanStack Router"],
    codeurl: "https://github.com/ahlamnuru/REST-Countries-API-with-color-theme-switcher",
    image: "/src/images/REST Countries.png",
  },

]