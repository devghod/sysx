export const controller = 'users'; // Controller name

export const actions = {
  async fetchUsers(skipNum: number) {
    const token = useCookie('token');
    const bearerToken = token.value;

    try {
      const config = useRuntimeConfig();
      const result: any = await useFetch(`${config.public.apiBaseUrl}${controller}/get-users`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });
      const { data, pending, error, status } = result;
      this.loading = pending;

      if (status.value === 'success') {
        this.users = data.value.users;
        this.total = data.value.total;
        this.skip = skipNum;
      } else {
        console.log("Error",error);
        this.errorMessage = error.value.data.message
      }
    } catch (error) {
      console.log("Error", error)
    }
  },

  async fetchUser(id: string) {
    const token = useCookie('token');
    const bearerToken = token.value;

    try {
      const config = useRuntimeConfig();
      const result: any = await useFetch(`${config.public.apiBaseUrl}${controller}/get-user/${id}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });
      const { data, pending, error, status } = result;

      this.loading = pending;

      if (status.value === 'success') {
        this.user = data.value.user;
      } else {
        console.log("Error",error);
        this.errorMessage = error.value.data.message
      }
    } catch (error) {
      
    }
  },

  async addUser(body: INewUserInfo) {
    this.loading = true;
    console.log('body', body)

    const config = useRuntimeConfig();
    const result: any = await useFetch(`${config.public.apiBaseUrl}${controller}/add-user`,
    {
      method: 'post',
      body: body,
    });
    const { data } = result;

    // if (data.value) {
    //   this.user = data.value.user;
    // };

    this.loading = false;
  },
};