<template>
  <div data-theme="light">
    <DashboardHorizontal />
    <div class="flex flex-row h-screen">
      <div class="w-full flex">
        <DashboardVertical />
        <div class="w-full p-5 h-5/6 overflow-y-scroll bg-gray-200">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  const title = ref('SYSX | Dashboard');
  const description = ref('My App Description');

  // This will be reactive even you change title/description above
  useHead({
    title,
    meta: [{
      name: 'description',
      content: description
    }]
  });

</script>