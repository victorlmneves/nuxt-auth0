<script setup>
definePageMeta({ auth: false });
const { status, data, getCsrfToken, getProviders } = useAuth();

const providers = await getProviders();
const csrfToken = await getCsrfToken();

console.log("🚀 ~ file: protected.vue:3 ~ isAuthenticated:", status.value);
</script>

<template>
  <h3>Welcome to the homepage</h3>
  <div>
    <h5>Authentication Overview</h5>
    <p>See all available authentication & session information below.</p>
    <pre v-if="status"><span>Status:</span> {{ status }}</pre>
    <pre v-if="data"><span>Data:</span> {{ data }}</pre>
    <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
    <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
  </div>
  <AppAlert> This is an auto-imported component </AppAlert>
</template>
