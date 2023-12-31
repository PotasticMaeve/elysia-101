import { FileRoute } from "./src/pages/file"
import { HomeRoute } from "./src/pages/home"
import { MemberRoute } from "./src/pages/member"

export const Route = (app) => {
    HomeRoute(app)
    MemberRoute(app)
    FileRoute(app)
}