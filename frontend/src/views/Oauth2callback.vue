<script>
import { useRoute } from 'vue-router'

export default {
    async mounted() {
        const response = await this.GetTOKEN();
        console.log(response);
        document.cookie = `refresh_token=${response.token.refresh_token}`;
        document.cookie = `access_token=${response.token.access_token}`;
        window.location = "./"
    },
    methods: {
        async GetTOKEN() {
            const code = useRoute().query.code;
            const Refresh_TOKEN = await fetch("http://192.168.11.2:3000/api/refresh_token", {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code,
                }),
            }).then((response) => response.json()).then((data) => { return data });
            return await Refresh_TOKEN;
        },
    },
}
</script>

<template>
    
</template>