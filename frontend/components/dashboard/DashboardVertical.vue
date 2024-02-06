<template>
  <div class="flex-initial w-48 shadow divide-y-2">
    <ul class="menu font-semibold">
      <li v-for="(menu, index ) in menus" :keys="index">
        <nuxt-link :to="menu.directory">
          <ClientOnly>
            <Icon
              v-if="menu?.icon"
              :name="menu.icon"
              :color="menu?.color ?? ''" 
              height="20"
              width="20"
            />
          </ClientOnly>
          {{ menu.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

  const menus = ref([
    {
      "name": "Dashboard",
      "directory": "/dashboard",
      "icon": "lets-icons:pipe-duotone-line",
      "color": null
    },
    {
      "name": "Users",
      "directory": "/dashboard/users",
      "icon": "lets-icons:group-fill",
      "color": null
    },
    // {
    //   "name": "Products",
    //   "directory": "/dashboard/products",
    //   "icon": "lets-icons:order-duotone",
    //   "color": null
    // },
    {
      "name": "Loans",
      "directory": "/dashboard/loans",
      "icon": "lets-icons:money-duotone",
      "color": null
    },
  ]);

</script>