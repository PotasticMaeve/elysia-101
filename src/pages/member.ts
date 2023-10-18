
export const MemberRoute = (app) => {
    app.group('/par', app => app
        .get("/", ({ params }) => {
            return greetingParams(params)
        })
        .get("/:food", ({ params }) => {
            return greetingParams(params)
        })
    )
}
const greetingParams = (q: any) => {
    const name = q?.food || 'anything'
    return `i love ${name}`
}
