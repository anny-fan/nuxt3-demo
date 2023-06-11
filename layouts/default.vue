<template>
  <div class="bg-gray-100 min-h-screen text-gray-900">
    <Title>{{ title }}</Title>
    <nav class="bg-white shadow text-lg px-6 py-6">
      <div class="container mx-auto flex items-center justify-between px-6">
        <div>
          <NuxtLink to="/">Logo</NuxtLink>
        </div>
        <div>
          <ul class="flex space-x-12">
            <li>
              <NuxtLink to="/" class="hover:text-violet-400">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="hover:text-violet-400"
                >About</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/admin" class="hover:text-violet-400"
                >Admin</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup>
const title = useState("title", () => "Blog");
</script>

<style>
.router-link-active {
  font-weight: bold;
}
</style>
