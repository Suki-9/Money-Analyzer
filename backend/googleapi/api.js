const fs = require('fs');

const genurl = async() => {
    const client = await JSON.parse(fs.readFileSync('./googleapi/client.json', 'utf8'));
    const client_json = client.web
    return `${client_json.auth_uri}?client_id=${client_json.client_id}&redirect_uri=${client_json.redirect_uris}&scope=https://www.googleapis.com/auth/drive&access_type=offline&response_type=code`
}
const GetRefresh_token = async(AuthorizatioCode) => {
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
const GetAccess_token = async (refresh_token) => {
    const client = await JSON.parse(fs.readFileSync('./googleapi/client.json', 'utf8'));
    const client_json = client.web

    const Access_token = await fetch("https://oauth2.googleapis.com/token", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh_token: refresh_token,
            client_id: client_json.client_id,
            client_secret: client_json.client_secret,
            redirect_uri: client_json.redirect_uris[0],
            grant_type: "refresh_token",
        })
    }).then((response) => response.json()).then((data) => { return data });
    return Access_token
}



exports.genurl = genurl
exports.GetRefresh_token = GetRefresh_token
exports.GetAccess_token = GetAccess_token