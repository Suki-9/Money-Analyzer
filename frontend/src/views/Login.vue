<script>
import Cookie from "@/components/js/Cookie.js"

export default {
    data() {
        return {
        }
    },
    async mounted() {
        window.location = (!Cookie.read("refresh_token")) ? await this.OAuthURL() : "./";
        window.close;
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