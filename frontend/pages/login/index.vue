<template>
  <div data-theme="light" class="w-screen h-screen flex flex-col justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
    <LoginForm :credentials="credentials" :loading="loading" @handleSubmit="handleSubmit" />
  </div>
</template>

<script setup lang="ts">

import { useAuthStore } from '~/stores/auth';
import { storeToRefs } from 'pinia';
import type { TLogin } from '~/stores/auth/state';

const { login } = useAuthStore();
const { authenticated ,loading } = storeToRefs(useAuthStore());
const credentials = ref<TLogin>({
  username: "",
  password: ""
});
const router = useRouter();

const handleSubmit = async () => {
  await login(credentials.value);

  if (authenticated) {
    router.push('/dashboard');
  }
}

</script>