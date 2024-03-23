<template>
  <v-app>
    <div data-theme="light" class="w-screen h-screen flex flex-col justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
      <LoginForm 
        :credentials="credentials" 
        :loading="loading" 
        :errorMsg="errorMessage"
        @handleSubmit="handleSubmit"  
      />
    </div>
  </v-app>
</template>

<script setup lang="ts">

import { useAuthStore } from '~/stores/auth';
import { storeToRefs } from 'pinia';
import type { TLogin } from '~/stores/auth/state';

const { login } = useAuthStore();
const { authenticated, loading, errorMessage } = storeToRefs(useAuthStore());
const router = useRouter();

const credentials = ref<TLogin>({
  username: "",
  password: ""
});

const handleSubmit = async () => {
  await login(credentials.value);
  setTimeout(() => {
    if (authenticated) {
      router.push('/dashboard');
    }
  }, 5000);
}

</script>