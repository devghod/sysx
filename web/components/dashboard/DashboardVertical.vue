<template>
  <div class="flex-initial w-48 shadow divide-y-2">
    <div class="">
      <ul class="menu font-semibold">
        <li v-for="(item, index ) in menus" :keys="index">
          <nuxt-link :to="item.directory">
            <Icon
              v-if="item?.icon"
              :name="item.icon"
              :color="item?.color ?? ''" 
              height="20"
              width="20"
            />
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
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
    {
      "name": "Products",
      "directory": "/dashboard/products",
      "icon": "lets-icons:order-duotone",
      "color": null
    },
    {
      "name": "Deptors",
      "directory": "/dashboard/depts",
      "icon": "lets-icons:money-duotone",
      "color": null
    },
  ]);

</script>