import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("academy", "routes/academy.tsx"),
  route("membership", "routes/membership.tsx"),
  route("impact", "routes/impact.tsx"),
  route("shop", "routes/shop.tsx"),
  route("book", "routes/book.tsx"),
] satisfies RouteConfig;
