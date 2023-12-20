<template>
  <div data-theme="light" class="w-screen h-screen flex flex-col justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
    <div class="w-full md:w-96 sm:w-full mx-auto rounded-lg md:shadow-lg md:border border-gray-100/50 p-4 text-center bg-white">
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
        Brand name
        <div class="text-xs font-normal">
          Tag line here
        </div>
      </div>
      <div class="p-2 space-y-8">
        <div class="space-y-3">
          <div class="">
            <div class="w-full flex">
              <div class="flex-1 bg-gray-500 rounded-l">
                <Icon 
                  class="mt-1"
                  name="heroicons:user-circle-20-solid" 
                  color="white" 
                  height="20"
                  width="20"
                />
              </div>
              <div class="flex-auto">
                <input 
                  class="px-4 py-1 block w-full border border-gray-200 rounded-r" 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Your email here" 
                >
              </div>
            </div>
          </div>
          <div class="">
            <div class="w-full flex">
              <div class="flex-1 bg-gray-500 rounded-l">
                <Icon 
                  class="mt-1"
                  name="heroicons:lock-closed-solid" 
                  color="white" 
                  height="20"
                  width="20"
                />
              </div>
              <div class="flex-auto">
                <input 
                  class="px-4 py-1 block w-full border border-gray-200 rounded-r" 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Your password here" 
                >
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <button class="btn btn-block btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>