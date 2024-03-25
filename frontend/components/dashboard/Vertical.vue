<template>
  <div class="dark:bg-slate-700 shadow">
    <div class="dark:bg-slate-700">
      <NuxtImg
        :src="companyDetails.logoUrl" 
        width="100"
        alt="Logo here"
        class="mx-auto my-2"
      />
    </div>

    <v-divider></v-divider>

    <div class="flex items-center gap-4 p-2 bg-slate-300">
      <span class="h-12 w-12">
        <NuxtImg
          src="https://randomuser.me/api/portraits/women/85.jpg" 
          width="100"
          alt="Profile here"
          class="rounded-full"
        />
      </span>
      <span class="hidden text-right lg:block">
        <span class="block text-sm font-medium text-black dark:text-slate-700">
          Sandra Adams
        </span>
        <span class="block text-xs font-medium text-slate-400">
          sandra_a88@gmailcom
        </span>
      </span>
    </div>
    
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
  </div>
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