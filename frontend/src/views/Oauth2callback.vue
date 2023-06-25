<script setup>
const AuthorizatioCode = location.search.replace("?code=","").split("&")[0]
document.cookie = 'AuthorizatioCode=' +AuthorizatioCode
window.open("/")
window.close()
</script>