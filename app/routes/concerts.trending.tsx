import { Outlet, Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Remix Routes Example" },
    { name: "description", content: "Concerts" },
  ];
};

export default function Trending() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2>Concerts Trending Page</h2>
    </div>
  );
}