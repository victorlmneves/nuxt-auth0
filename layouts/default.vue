<template>
  <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div class="w-full md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col md:p-4 mt-4 py-2 bg-gray-50 rounded-lg border md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700"
        >
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/protected">Protected</NuxtLink></li>
          <li><NuxtLink to="/access">Access</NuxtLink></li>
          <li><NuxtLink to="/login">Login</NuxtLink></li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container mx-auto max-w-5xl mx-auto px-5 m-5">
    <slot />
  </main>
</template>
