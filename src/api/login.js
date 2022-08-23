const { google } = require("googleapis")

const clientId = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.GOOGLE_CLIENT_SECRET

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  process.env.GOOGLE_REDIRECT_URI
)

google.options({ auth: oauth2Client })

const scopes = ["profile"]

const login = async (req, res) => {
  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes.join(" "),
  })

  return res.redirect(authorizeUrl)
}

export default login