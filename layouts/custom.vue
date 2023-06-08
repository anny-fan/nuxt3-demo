<template>
  <div>
    <nav>custom nav header</nav>
    <slot />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<style scoped></style>
