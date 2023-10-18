import { Elysia } from "elysia";
import { Route } from "../routes";

const app = new Elysia()

Route(app)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
