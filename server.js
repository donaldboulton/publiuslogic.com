/* https://glitch.com/edit/#!/github-oauth-client?path=README.md%3A1%3A0 */
const { OAuthApp, getNodeMiddleware } = require("@octokit/oauth-app")
const { Server } = require("node-static")

const app = new OAuthApp({
  clientId: process.env.OCTOKIT_PERSONAL_CLIENT_ID,
  clientSecret: process.env.OCTOKIT_PERSONAL_CLIENT_SECRET
})

app.on("token", async ({ token, octokit }) => {
  const { data } = await octokit.request("GET /user")
  console.log(`Token retrieved for ${data.login}`)
})

const file = new Server("./public")

require("http")
  .createServer(getNodeMiddleware(app, { onUnhandledRequest: file.serve.bind(file) }))
  .listen(process.env.PORT)