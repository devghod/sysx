<template>
  <div>
    <div class="h-screen w-screen flex justify-center items-center">
      <div class="w-full h-full sm:h-auto sm:w-80 rounded-lg shadow-2xl p-6 bg-white">
        <div class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">SYS <span class="text-rose-500">X</span></div>
        <div class="mb-4 text-xs text-gray-400 text-center">Login if you can with your account</div>
        <div class="space-y-2 my-4">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div class="mt-2">
              <input 
                placeholder="Email" 
                v-model="credentials.email" 
                id="email" 
                name="email" 
                type="email" 
                required 
                :disabled="loading"
                class="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-2 mb-4">
              <input 
                placeholder="Password" 
                v-model="credentials.password" 
                id="password" 
                name="password" 
                type="password" 
                required 
                :disabled="loading"
                class="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>
          <div>
            <button 
              @click="submit"
              :disabled="loading"
              type="submit" 
              class="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              v-bind:class="{'opacity-50': loading}"
            >
            <div v-if="loading" class="flex">
              <Loaders />
              <span>Processing...</span>
            </div>  
            <div v-else>
              Sign in
            </div>
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SysxLogin',

  props: {
    credentials: {
      type: Object,
      required: true
    },
  },

  data() {
    return {
      loading: false,
    };
  },

  mounted() {
    
  },

  methods: {
    submit() {
      this.loading = true;
      console.log("Credentials: ",this.credentials);
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>

</style>