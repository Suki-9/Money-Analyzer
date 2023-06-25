<script setup>
const API_TOKEN = location.search.replace("?code=","").split("&")[0]
document.cookie = 'API_TOKEN=' + API_TOKEN;
window.open("/");
window.close();
</script>