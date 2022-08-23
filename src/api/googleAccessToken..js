const { google } = require("googleapis")

const clientId = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.GOOGLE_CLIENT_SECRET
const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  process.env.GOOGLE_REDIRECT_URI
)

google.options({ auth: oauth2Client })

const googleAccessToken = async (req, res) => {
  const code = req.query.code
  const token = await oauth2Client.getToken(code)

  return res.redirect(
    `${process.env.GOOGLE_APP_REDIRECT_URI}?token=${JSON.stringify(token?.tokens)}`
  )
}

export default googleAccessToken