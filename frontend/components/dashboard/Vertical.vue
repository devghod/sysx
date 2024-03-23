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

    <ul>
      <li 
        v-for="(menu, index) in menus" :key="index"
        @click="reRouter(menu.directory)"
        class="bg-slate-100 hover:bg-slate-500 hover:text-slate-100 py-2"
        :class="{
          'text-center': rail,
          'px-4': !rail
        }"
      >
        <span 
          :class="menu.icon"
        ></span> {{ }}
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
    
    <!-- <v-list
      density="compact"
      nav
      color="#B39DDB"
      base-color="#616161"
    >
      <v-list-item 
        v-for="(menu, idx) in menus"
        :key="idx"
        :title="menu.name"
        :value="menu.name"
        :prepend-icon="menu.icon"
        @click="reRouter(menu.directory)"
      >
        <template v-slot:prepend>
          <v-icon :color="menu.color"></v-icon>
        </template>
        <template v-slot:title>
          <div class="text-h6 text-grey hover:text-grey-100">{{ menu.name }}</div>
        </template>
      </v-list-item>
    </v-list> -->
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

  const reRouter = (data: String) => {
    router.push(data);
  }

</script>