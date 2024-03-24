<template>
  <v-navigation-drawer
    :rail="rail"
    :width="200"
  >
    <v-list>
      <v-list-item>
        <NuxtImg
          :src="companyDetails.logoUrl" 
          width="100"
          alt="Logo here"
        />
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
        lines="two"
      ></v-list-item>
    </v-list>
    
    <v-divider></v-divider>
    
    <nav>
      <ul class="shadow shadow-inner divide-y divide-slate-200 dark:divide-slate-400">
        <li 
          v-for="(menu, index) in menus" 
          :key="index"
          @click="reRouter(menu.directory)"
          class="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 hover:bg-blue-300 hover:text-slate-100 py-2"
          :class="{
            'text-center': rail,
            'px-4': !rail,
            'bg-blue-500 text-slate-100 dark:bg-blue-500 dark:text-slate-100': route === menu.directory,
          }"
        >
          <span :class="menu.icon"></span>
          <span 
            class="font-semibold text-sm ml-2"
            :class="{
              'hidden': rail,
            }"
          >
            {{ menu.name }}
          </span> 
        </li>
      </ul>
    </nav>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

  const props = defineProps({
    rail: { type: Boolean },
  });

  const companyDetails = ref({
    name: "Company name here",
    logoUrl: "https://img.logoipsum.com/323.svg"
  });

  const menus = ref([
    {
      "name": "Dashboard",
      "directory": "/dashboard",
      "icon": "mdi mdi-view-dashboard",
      "color": "#2196F3"
    },
    {
      "name": "Users",
      "directory": "/dashboard/users",
      "icon": "mdi mdi-account-group",
      "color": "warning"
    },
    {
      "name": "Loans",
      "directory": "/dashboard/loans",
      "icon": "mdi mdi-account-cash",
      "color": "primary"
    },
    {
      "name": "Settings",
      "directory": "/dashboard/settings",
      "icon": "mdi mdi-cog",
      "color": "error"
    },
  ]);

  const router = useRouter();
  const route = ref();

  const reRouter = (data: String) => {
    route.value = data;
    router.push(data);
  }

</script>