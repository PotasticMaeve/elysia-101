import { staticPlugin } from "@elysiajs/static";
import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { Route } from "../routes";

const app = new Elysia()

app.use(cors({
  origin: ['*']
}))

app.use(staticPlugin({
  assets: 'public/img',
  prefix: '/static/img',
  headers: {
    'Content-Type': 'image/jpeg'
  }
}))

app.use(staticPlugin({
  assets: 'public/pdf',
  prefix: '/static/pdf',
  headers: {
    'Content-Type': 'application/pdf'
  }
}))

app.use(staticPlugin({
  assets: 'public',
  prefix: '/static/file',
  headers: {
    'Content-Type': 'plain/text'
  }
}))

Route(app)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
