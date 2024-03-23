<template>
  <div>
    <v-app>
      <DashboardVertical :rail="rail" />
      <DashboardHorizontal :rail="rail" @updateRail="updateRail" />
      <v-main class="d-flex align-center justify-center bg-gray-200" style="min-height: 300px;">
        <slot />
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">

  const title = ref('SYSX | Dashboard');
  const description = ref('My App Description');
  const rail = ref(false);
  
  const updateRail = () => {
    rail.value == true ? rail.value = false : rail.value = true;
  }

  // This will be reactive even you change title/description above
  useHead({
    title,
    meta: [{
      name: 'description',
      content: description
    }]
  });

</script>