<script>
import Cookie from "@/components/js/Cookie.js"

export default {
    data() {
        return {
        }
    },
    async mounted() {
        if (!Cookie.read("refresh_token")) {
            window.location = await this.OAuthURL();
        } else {
            const refresh_token = Cookie.read("refresh_token")
            const access_token = await fetch("http://192.168.11.2:3000/api/access_token", {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: refresh_token,
                }),
            }).then((response) => response.json()).then((data) => { return data });
            document.cookie = `access_token=${access_token.token.access_token}`;
            window.location = "./"
        }
    },
    methods: {
        async OAuthURL() {
            const OAuth_URL = await fetch("http://192.168.11.2:3000/api/oauth2", {
                mode: 'cors',
                method: 'GET',
            }).then((response) => response.json()).then((data) => { return data });
            return await OAuth_URL.auth_url;
        },
    },
}
</script>

<template>


</template>