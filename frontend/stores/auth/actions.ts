export const controller = 'auth'; // Controller name

export const actions = {
  init() {
    LoginInit.username = "";
    LoginInit.password = "";
  },
  async verify() {
    const tkn = useCookie('token');
    const token = { token: tkn.value };

    try {
      const config = useRuntimeConfig();
      const result: any = await useFetch(`${config.public.apiBaseUrl}${controller}/verify`,
      {
        method: 'post',
        body: token,
      });

      const { data, pending, error, status } = result;

      this.loading = pending;
  
      if (status.value === 'success') {
        // this.token = data.value.token;
        const token = useCookie('token');
        token.value = data?.value?.token; 
        this.authenticated = true;
      } else {
        console.log("Error",error);
        this.authenticated = false;
        this.errorMessage = error.value.data.message
      }
    } catch (error) {
      console.log("Error", error)
    }
  },
  async login(credentials: TLogin) {
    try {
      const config = useRuntimeConfig();
      const result: any = await useFetch(`${config.public.apiBaseUrl}${controller}/login`,
      {
        method: 'post',
        body: credentials,
      });

      const { data, pending, error, status } = result;

      this.loading = pending;
  
      if (status.value === 'success') {
        this.token = data.value.token;
        const token = useCookie('token');
        token.value = data?.value?.token; 
        this.authenticated = true;
      } else {
        console.log("Error",error);
        this.authenticated = false;
        this.errorMessage = error.value.data.message
      }
    } catch (error) {
      console.log("Error", error)
    }
  },
  logoutUser() {
    const token = useCookie('token'); // useCookie new hook in nuxt 3
    this.authenticated = false; // set authenticated  state value to false
    token.value = null; // clear the token cookie
  },
};