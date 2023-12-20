<template>
  <div data-theme="light" class="w-screen h-screen flex flex-col justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
    <LoginForm :credentials="credentials" />
  </div>
</template>

<script setup lang="ts">

const credentials = ref({
  email: "",
  password: ""
});

</script>