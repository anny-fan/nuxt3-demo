<template>
  <h1>index</h1>
  <Counter />
  x: {{ x }} y: {{ y }}
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
  <ul>
    <li v-for="user in users2" :key="user.id">{{ user.name }}</li>
  </ul>
  <ul>
    <li v-for="user in users3" :key="user.id">{{ user.name }}</li>
  </ul>
  {{ user.name }}

  <div class="container mx-auto bg-gray-300 p-8">
    <h2>Weather</h2>
    <div>{{ weather.timezone }}</div>
  </div>
</template>

<script setup>
const { x, y } = useMouse();
const users = ref([]);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => (users.value = data));
});

const { data: users2 } = await useAsyncData("users2", () =>
  $fetch("https://jsonplaceholder.typicode.com/users")
);

const { data: users3 } = await useFetch(
  "https://jsonplaceholder.typicode.com/users"
);

const { data: user } = await useFetch(
  "https://jsonplaceholder.typicode.com/users/1",
  { pick: ["name", "email", "id"] }
);

const { data: weather } = await useFetch("/api/weather");
</script>
