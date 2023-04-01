export default defineNuxtRouteMiddleware((to, from) => {
    console.log("🚀 ~ file: auth.ts:2 ~ defineNuxtRouteMiddleware ~ to, from :::::: ", to, from)
    // isAuthenticated() is an example method verifying if a user is authenticated
    // if (isAuthenticated() === false) {
      return navigateTo('/login')
    // }
  })
  