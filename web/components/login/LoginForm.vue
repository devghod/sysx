<template>
  <div class="w-full md:w-96 sm:w-full mx-auto rounded-lg md:shadow-lg md:border border-gray-100/50 px-4 pt-5 pb-10 text-center bg-white">
    <div class="flex flex-col items-center">
      <NuxtImg 
        preload 
        loading="lazy"
        src="/logo/logo here.png" 
        width="120" 
        alt="Your logo here" 
      />
    </div>
    <div class="font-bold mb-6">
      <div class="antialiased text-xl">Brand name</div>
      <div class="text-xs font-normal text-gray-500 subpixel-antialiased">
        Tag line here
      </div>
    </div>
    <div class="p-2 space-y-10">
      <div class="space-y-3">
        <div class="">
          <div class="w-full flex">
            <div class="w-10 bg-slate-500 rounded-l">
              <Icon 
                class="mt-2"
                name="heroicons:user-circle-20-solid" 
                color="white" 
                height="20"
                width="20"
              />
            </div>
            <div class="flex-auto">
              <input 
                class="px-4 py-2 w-full rounded-r outline-none focus:outline-none ring ring-transparent ring-inset hover:ring-pink-300 focus:ring-pink-500 bg-slate-100 focus:bg-slate-200 font-medium text-slate-800" 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Your email here" 
                v-model="credentials.email" 
              >
            </div>
          </div>
        </div>
        <div class="">
          <div class="w-full flex">
            <div class="w-10 bg-slate-500 rounded-l">
              <Icon 
                class="mt-2"
                name="heroicons:lock-closed-solid" 
                color="white" 
                height="20"
                width="20"
              />
            </div>
            <div class="flex-auto">
              <input 
                class="px-4 py-2 w-full outline-none focus:outline-none ring ring-transparent ring-inset hover:ring-pink-300 focus:ring-pink-500 bg-slate-100 focus:bg-slate-200 font-medium text-slate-800" 
                :type="showPassword ? '' : 'password'" 
                name="password" 
                id="password" 
                placeholder="Your password here" 
                v-model="credentials.password" 
              >
            </div>
            <div class="bg-slate-100 rounded-r pr-2">
              <button v-if="!showPassword" @click="showPassword = true">
                <Icon 
                  class="mt-2"
                  name="lets-icons:hide-eye-duotone" 
                  color="" 
                  height="20"
                  width="20"
                />
              </button>
              <button v-if="showPassword" @click="showPassword = false">
                <Icon 
                  class="mt-2"
                  name="lets-icons:eye-duotone" 
                  color="" 
                  height="20"
                  width="20"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <button
          class="btn btn-primary btn-block"
          :class="{ 'btn btn-disabled': loading }"
          @click="submit"
        >
          <span v-if="loading" class="loading loading-spinner"></span>
          <div v-else>Sign in</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import { useLoginStore } from '~/stores/loginStore';
  import type { TLogin } from '~/stores/loginStore';

  const props = defineProps<{
    credentials: TLogin
  }>();

  const title = ref('SYSX | Login');
  const description = ref('My App Description');

  // This will be reactive even you change title/description above
  useHead({
    title,
    meta: [{
      name: 'description',
      content: description
    }]
  });

  const loading = ref(false);
  const showPassword = ref(false);

  const submit = async () => {
    loading.value = true;
    console.log("Credentials: ", props.credentials);
    setTimeout(() => {
      loading.value = false;
      navigateTo('/dashboard');
    }, 3000);
  }

</script>