<template>
  <div class="grid grid-cols-6 gap-4 dark:bg-slate-700 dark:text-slate-100 shadow">
    <div class="col-start-1 col-end-3 self-center mx-5">
      <Buttons
        v-if="rail"
        @click="updateRail"
        type="icon"
        icon="mdi mdi-menu-close" 
      />
      <Buttons
        v-else
        @click="updateRail"
        type="icon"
        icon="mdi mdi-menu-open" 
      />
    </div>
    <div class="col-end-7 col-span-1">
      <div class="flex space-x-4 justify-end mx-5 my-4">
        <div class="self-center">
          <!-- On -->
          <Buttons
            v-if="theme.global.current.value.dark"
            @click="toggleTheme"
            type="icon"
            icon="mdi mdi-lightbulb-on" 
          />
          <!-- Off -->
          <Buttons
            v-else
            @click="toggleTheme"
            type="icon"
            icon="mdi mdi-lightbulb-on-10" 
          />
        </div>
        <div class="dark:bg-slate-700">
          <v-menu>
            <template v-slot:activator="{ props }">
              <Buttons
                v-if="profileOrDots == 'profile'"
                v-bind="props"
                type="profile"
                :data="profile" 
              />
              <Buttons
                v-if="profileOrDots == 'dots'"
                v-bind="props"
                type="icon"
                icon="mdi mdi-dots-vertical" 
              />
            </template>

            <ul class="w-40 rounded bg-white dark:bg-slate-700 dark:text-slate-300 shadow border dark:border-slate-500">
              <li class="border-b dark:border-slate-500 py-2 hover:bg-blue-400" @click="reRouter('/dashboard/profile')">
                <span class="text-sm font-semibold m-4">
                  Profile
                </span>
              </li>
              <li class="border-b dark:border-slate-500 py-2 hover:bg-blue-400" @click="reRouter('/dashboard/settings')">
                <span class="text-sm font-semibold m-4">
                  Settings
                </span>
              </li>
              <li class="py-2 hover:bg-blue-400" @click="logout">
                <span class="text-sm font-semibold text-red-500 mx-4">
                  Sign Out
                </span>
              </li>
            </ul>

          </v-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { useAuthStore } from '~/stores/auth';
  import { storeToRefs } from 'pinia';
  import { useTheme } from 'vuetify';

  const theme = useTheme(); // vuetify theme
  const colorMode = useColorMode(); // tailwindcss
  const { profile } = storeToRefs(useAuthStore());
  const { logoutUser } = useAuthStore();
  const router = useRouter();
  const profileOrDots = ref('dots'); // profile, dots 

  const companyDetails = ref({
    name: "Company name here",
    logoUrl: "https://img.logoipsum.com/323.svg"
  });
  
  const props = defineProps({
    rail: { type: Boolean },
  });

  const emit = defineEmits([
    'updateRail', 
  ]);

  const updateRail = () => {
    emit('updateRail');
  };

  const logout = () => {
    logoutUser();
    router.push('/login');
  }

  const reRouter = (data: String) => {
    router.push(data);
  }

  // Set theme mode default
  const toggleTheme = () => {
    // if (theme.global.current.value.dark) {
    //   theme.global.name.value = 'light';
    //   colorMode.value = 'light';
    // } else {
    //   theme.global.name.value = 'dark';
    //   colorMode.value = 'dark';
    // }
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
  }

</script>