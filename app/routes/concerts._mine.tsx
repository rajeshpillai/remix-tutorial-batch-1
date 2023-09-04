import { Outlet, Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Remix Routes Example" },
    { name: "description", content: "Concerts" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2>Concerts My Page</h2>
      <p>This page has opted out of layout</p>
    </div>
  );
}