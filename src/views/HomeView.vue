<script setup>
//Cookieの取得
function GetCookie() {
    const Cookie = document.cookie.split(";")
    const Cookies = []
    const index = []
    for (let i=0;i<Cookie.length;i++) {
        let elem = Cookie[i].split("=")
        Cookies.push(elem)
        index.push(elem[0])
    }
    return [Cookies,index]
}
const Get = GetCookie()
const Cookie = Get[0]
const index = Get[1]

//Cookieの検索
function leadCookie(key) {
    let i = index.indexOf(key)
    if (i !== -1) {
        return Cookie[i][1]
    } else {
        return null
    }
}
window.location.href = '/authorize'
//トークンの有無を確認
if (leadCookie("API_TOKEN") == null) {
    window.open('/authorize', '_blank');
}
</script>

<template>
</template>

<style scoped>

</style>