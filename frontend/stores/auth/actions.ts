export const controller = 'auth'; // Controller name

export const actions = {

  init() {
    LoginInit.username = "";
    LoginInit.password = "";
  },

  async verify() {
    const tkn = useCookie('token');
    const token = { token: tkn.value };
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const result: any = await $fetch(`${config.public.apiBaseUrl}${controller}/verify`,
      {
        method: 'POST',
        body: token,
      });

      const { success, decoded, profile, message } = result;
      
      if (success) {
        this.token = token.token; 
        this.authenticated = true;
        this.profile = profile;
        this.loading = false;
      } else {
        this.authenticated = false;
        this.errorMessage = message;
        this.loading = false;
      }

    } catch (error) {
      console.log("Error", error);
      this.loading = false;
    }
  },

  async login(credentials: TLogin) {
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const result: any = await $fetch(`${config.public.apiBaseUrl}${controller}/login`,
      {
        method: 'POST',
        body: credentials,
      });

      const { success, token: tkn, message } = result;
  
      if (success) {
        this.token = tkn;
        const token = useCookie('token');
        token.value = tkn; 
        this.authenticated = true;
        this.errorMessage = "";
        this.loading = false;
      } else {
        this.authenticated = false;
        this.errorMessage = message;
        this.loading = false;
      }
    } catch (error) {
      console.log("Error", error);
      this.loading = false;
    }
  },

  logoutUser() {
    const token = useCookie('token'); // useCookie new hook in nuxt 3
    this.authenticated = false; // set authenticated  state value to false
    token.value = null; // clear the token cookie
  },
  
};