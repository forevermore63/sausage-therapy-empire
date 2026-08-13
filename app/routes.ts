import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("academy", "routes/academy.tsx"),
  route("membership", "routes/membership.tsx"),
  route("impact", "routes/impact.tsx"),
  route("shop", "routes/shop.tsx"),
  route("book", "routes/book.tsx"),
  route("farm", "routes/farm.tsx"),
  route("stories", "routes/stories.tsx"),
  route("events", "routes/events.tsx"),
  route("virtual", "routes/virtual.tsx"),
  route("journal", "routes/journal.tsx"),
  route("give", "routes/give.tsx"),
  route("community", "routes/community.tsx"),
  route("legacy", "routes/legacy.tsx"),
] satisfies RouteConfig;
