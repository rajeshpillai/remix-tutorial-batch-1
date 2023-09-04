import { Outlet, Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function ConcertsNav() {
  return (
    <>
      <Link to="/concerts">Overview</Link> {">"}
      <Link to="/concerts/trending">Trending</Link> {">"}
      <Link to="/concerts/mine">Mine</Link>
    </>
  )
}
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Concerts Layout Page</h1>
      <ConcertsNav />
      <Outlet />
    </div>
  );
}