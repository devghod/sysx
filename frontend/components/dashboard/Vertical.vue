<template>
  <div class="dark:bg-slate-700 shadow dark:shadow-white ease-in-out duration-300">
    <div class="dark:bg-slate-700">
      <NuxtImg
        :src="companyDetails.logoUrl" 
        alt="Logo here"
        class="mx-auto m-2"
        :class="{
          'h-4': rail,
          'h-12': !rail,
        }"
      />
    </div>

    <v-divider></v-divider>

    <div class="flex gap-2 items-center justify-center bg-slate-300 p-2 shadow shadow-inner">
      <span>
        <NuxtImg
          :src="
            profile?.image ? 
            profile.image : 
            ''
          "
          :alt="
            profile?.first_name && profile?.last_name ?
            profile.first_name + ' ' + profile.last_name :
            ''
          "
          class="rounded-full h-12 w-12"
          :class="{
            'h-10 w-10': rail,
          }"
        />
      </span>
      <span 
        class="text-right xs:hidden"
        v-if="!rail"
      >
        <span class="block text-sm font-medium text-black dark:text-slate-700">
          {{ profile?.first_name }} {{ }} {{ profile?.last_name }}
        </span>
        <span 
          class="block text-xs font-medium text-slate-500"
          :class="{
            'hidden': rail,
          }"
        >
          {{ profile?.email }}
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
          class="dark:hover:bg-blue-300 dark:hover:text-slate-100 hover:bg-blue-300 hover:text-slate-100 py-2"
          :class="{
            'text-center': rail,
            'px-4': !rail,
            'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400': route !== menu.directory,
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

  import { useAuthStore } from '~/stores/auth';
  import { storeToRefs } from 'pinia';

  const { profile } = storeToRefs(useAuthStore());

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
    // {
    //   "name": "Settings",
    //   "directory": "/dashboard/settings",
    //   "icon": "mdi mdi-cog",
    //   "color": "error"
    // },
  ]);

  const router = useRouter();
  const route = ref();

  const reRouter = (data: String) => {
    route.value = data;
    router.push(data);
  }

</script>