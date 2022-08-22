const { OAuthApp, createNodeMiddleware } = require("@octokit/oauth-app");

const app = new OAuthApp({
  clientType: "github-app",
  allowSignup: "true",
  clientId: process.env.OCTOKIT_PERSONAL_CLIENT_ID,
  clientSecret: process.env.OCTOKIT_PERSONAL_CLIENT_SECRET,
});

app.on("token", async ({ token, octokit, expiresAt }) => {
  const { data } = await octokit.request("GET /user");
  console.log(`Token retrieved for ${data.login}`);
});

require("http").createServer(createNodeMiddleware(app)).listen(3000);
