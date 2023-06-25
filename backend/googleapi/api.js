function genurl() {
    const {google} = require('googleapis');
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('googleapi/client.json', 'utf8'))["web"];
  
    const oauth2Client = new google.auth.OAuth2(
        YOUR_CLIENT_ID = data["client_id"],
        YOUR_CLIENT_SECRET = data["client_secret"],
        YOUR_REDIRECT_URL = data["redirect_uris"]
    );
  
    const scopes = [
        'https://www.googleapis.com/auth/drive'
    ];
  
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes
    });
  
    return url;
}

exports.genurl = genurl();