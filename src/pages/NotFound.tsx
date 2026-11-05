import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="text-6xl font-bold text-teal-400">404</p>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-zinc-400">This page does not exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-teal-400 px-6 py-3 font-medium text-zinc-950"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;