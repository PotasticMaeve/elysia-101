
export const HomeRoute = (app) => {
    app.group("/", app => app)
        .get("", () => greeting())
        .get("", ({ query }) => {
            return greetingQuery(query)
        })
}

const greeting = () => "Hello Felicia"

const greetingQuery = (q: any) => {
    const name = q?.name || 'guest!'
    return `Hello ${name}`
}