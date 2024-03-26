<template>
  <div>
    <v-app>
      <div class="flex h-screen overflow-hidden">
        <DashboardVertical :rail="rail" />
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <DashboardHorizontal :rail="rail" @updateRail="updateRail" />
          <main>
            <div class="mx-auto md:p-6 2xl:p-10 bg-gray-200 dark:bg-slate-500">
              <NuxtPage />
            </div>
          </main>
        </div>
      </div>
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