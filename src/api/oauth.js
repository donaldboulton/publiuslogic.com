import { OAuthApp, createNodeMiddleware } from "@octokit/oauth-app";
import { Server } from "node-static";

const githubClientId = (process.env.GITHUB_CLIENT_ID);
const githubClientSecret = (process.env.GITHUB_CLIENT_SECRET);

const app = new OAuthApp({
  clientType: "oauth-app",
  clientId: githubClientId,
  clientSecret: githubClientSecret,
});

app.on("token", async ({ token, octokit }) => {
  const { data } = await octokit.request("GET /user");
  console.log(`Token retrieved for ${data.login}`);
});

const file = new Server("./api");

require("http")
  .createServer(createNodeMiddleware(app, { onUnhandledRequest: file.serve.bind(file) }))
  .listen(process.env.PORT);
