<template>
  <div class="">
    Settings

  </div>
</template>

<script setup lang="ts">

  import { useUserStore } from '~/stores/users';
  import { storeToRefs } from 'pinia';

  definePageMeta({
    layout: "dashboard"
  });

  const { fetchUsersByFilter } = useUserStore();
  const { users, loading, total, limit, skip } = storeToRefs(useUserStore());

</script>