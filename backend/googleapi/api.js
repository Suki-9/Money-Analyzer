const fs = require('fs');

const genurl = async() => {
    const client = await JSON.parse(fs.readFileSync('./googleapi/client.json', 'utf8'));
    const client_json = client.web
    return `${client_json.auth_uri}?client_id=${client_json.client_id}&redirect_uri=${client_json.redirect_uris}&scope=https://www.googleapis.com/auth/drive&access_type=offline&response_type=code`
}
const gettoken = async(AuthorizatioCode) => {
    const client = await JSON.parse(fs.readFileSync('./googleapi/client.json', 'utf8'));
    const client_json = client.web

    const Refresh_TOKEN = await fetch("https://oauth2.googleapis.com/token", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: client_json.client_id,
            client_secret: client_json.client_secret,
            redirect_uri: client_json.redirect_uris[0],
            grant_type: "authorization_code",
            code: AuthorizatioCode,
        })
    }).then((response) => response.json()).then((data) => { return data });
    return Refresh_TOKEN
};


exports.genurl = genurl
exports.gettoken = gettoken