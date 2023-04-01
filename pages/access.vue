<script setup>
const router = useRouter();
const { currentRoute } = useRouter();
const routeName = currentRoute.value.name;

definePageMeta({ auth: false })
// console.log('This page will be displayed at the /access route.', route.name)
if (routeName === 'access') {
  console.log('This page will be displayed at the /access route.')
  router.push('/')
}
</script>

<template>
  <section>
    <p>This page will be displayed at the /access route.</p>
  </section>
</template>
