import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "MyApp - About Us" },
    { name: "description", content: "About us!" },
  ];
};

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>About Us</h1>
    </div>
  );
}
