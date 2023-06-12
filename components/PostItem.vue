<template>
  <div class="post-container py-8">
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/${props.post.id}`">{{
        props.post.title
      }}</NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>{{ props.post.created_at }}</div>
      <div>&middot;</div>
      <div>{{ props.post.user.name }}</div>
    </div>
    <div class="post-preview leading-relaxed mt-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis cum
      alias, quasi ipsam quod in explicabo voluptatibus, quas dicta ut
      accusantium? Praesentium voluptatem, optio tenetur sunt expedita aperiam,
      eos ab magni voluptate eveniet accusamus saepe quidem, harum quaerat!
      Corporis, amet!
    </div>
    <div class="mt-4">
      <NuxtLink
        :to="`/posts/${props.post.id}`"
        class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2"
        >Read More</NuxtLink
      >
    </div>
  </div>
</template>
<script setup>
import { objectExpression } from "@babel/types";

const props = defineProps({
  post: Object,
});
</script>
