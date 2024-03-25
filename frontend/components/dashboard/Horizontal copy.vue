<template>
  <v-app-bar>
    <template v-slot:prepend>
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
    </template>

    <template v-slot:append>
      <div class="flex space-x-4 mr-2 ">
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
        <div>
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

            <v-list
              max-width="200"
              min-width="200"
            >
              <v-list-item 
                value="1"
                to="/dashboard/profile"
                base-color="#2196F3"
              >
                <span class="text-sm font-semibold">
                  Profile
                </span>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item 
                value="2" 
                to="/dashboard/settings"
              >
                <span class="text-sm font-semibold">
                  Settings
                </span>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item 
                value="3" 
                @click="logout"
              >
                <span class="text-sm font-semibold text-red-500">
                  Log Out
                </span>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </template>
  </v-app-bar>
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