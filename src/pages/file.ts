export const FileRoute = (app) => {
    app.get('/file', () => Bun.file('member.json'))
} 