<script setup>
const { status, data, signOut, signIn } = useSession()
console.log("🚀 ~ file: protected.vue:3 ~ status:", status.value)
definePageMeta({ auth: false })
</script>

<template>
  <h1 class="text-2xl font-medium mb-2">Welcome to the homepage</h1>
  <AppAlert> This is an auto-imported component </AppAlert>
</template>
