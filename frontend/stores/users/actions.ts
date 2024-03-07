import { UserInit } from '~/stores/users/types';

export const controller = 'users'; // Controller name

export const actions = {

  init() {
    UserInit.first_name = "";
    UserInit.middle_name = "";
    UserInit.last_name = "";
    UserInit.image = "";
    UserInit.email = "";
    UserInit.username = "";
    UserInit.password = "Admin@123";
  },

  clearAll() {
    this.user = null;
  },

  async fetchUsersStatistics() {
    const token = useCookie('token');
    const bearerToken = token.value;
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const { 
        total_users,
        total_users_active,
        total_users_deactive,
        success, 
        message 
      }: any = await $fetch(`${config.public.apiBaseUrl}${controller}/get-users/statistics`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (success) {
        this.total_users = total_users;
        this.total_users_active = total_users_active;
        this.total_users_deactive = total_users_deactive;
        this.loading = false;
      } else {
        console.log("Error",error);
        this.errorMessage = message;
        this.loading = false;
      }
    } catch (error) {
      console.log("Error", error)
    }
  },

  async fetchUsers(skipNum: Number) {
    const token = useCookie('token');
    const bearerToken = token.value;
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const { 
        users, 
        success, 
        total, 
        message 
      }: any = await $fetch(`${config.public.apiBaseUrl}${controller}/get-users`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (success) {
        this.users = users;
        this.total = total;
        this.skip = skipNum;
        this.loading = false;
      } else {
        console.log("Error",error);
        this.errorMessage = message;
        this.loading = false;
      }
    } catch (error) {
      console.log("Error", error)
    }
  },

  async fetchUser(id: String) {
    const token = useCookie('token');
    const bearerToken = token.value;
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const { 
        data, 
        success,
        message
      }: any = await $fetch(`${config.public.apiBaseUrl}${controller}/get-user/${id}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (success) {
        this.user = data;
        this.loading = false;
      } else {
        this.errorMessage = message;
        this.loading = false;
      }
    } catch (error) {
      console.log("Error", error);
    }
  },

  async fetchUsersByFilter(skipNum: Number, filter: Object) {
    const token = useCookie('token');
    const bearerToken = token.value;
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const { 
        users, 
        success, 
        total, 
        message 
      }: any = await $fetch(`${config.public.apiBaseUrl}${controller}/post-users`, {
        method: 'POST',
        body: filter,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (success) {
        this.users = users;
        this.total = total;
        this.skip = skipNum;
        this.loading = false;
      } else {
        console.log("Error",error);
        this.errorMessage = message;
        this.loading = false;
      }
    } catch (error) {
      console.log("Error", error)
    }
  },

  async addUser(body: TNewUserInfo) {
    const token = useCookie('token');
    const bearerToken = token.value;
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const { 
        data, 
        success,
        message, 
      } : any = await $fetch(`${config.public.apiBaseUrl}${controller}/post-user`,
      {
        method: 'POST',
        body: body,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (success) {
        this.users.push(data);
        this.init();
        this.loading = false;
      } else {
        this.errorMessage = message;
        this.loading = false;
      }
    } catch (error) {
      console.log("Error", error);
    }

  },

  async deleteUser(id: String) {
    const token = useCookie('token');
    const bearerToken = token.value;
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const { 
        data, 
        success,
        message
      }: any = await $fetch(`${config.public.apiBaseUrl}${controller}/delete-user/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });
 
      if (success) {
        let indexToRemove = this.users.findIndex(curr => {
          if (curr._id === data._id) return curr;
        });
        if (indexToRemove !== -1) this.users.splice(indexToRemove, 1);
        this.loading = false;
      } else {
        this.errorMessage = message;
        this.loading = false;
      }
    } catch (error) {
      console.log("Error", error);
    }
  },

  async updateUserStatus(id: String) {
    const token = useCookie('token');
    const bearerToken = token.value;
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const { 
        data, 
        success,
        message
      }: any = await $fetch(`${config.public.apiBaseUrl}${controller}/put-user/status/${id}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });
 
      if (success) {
        let indexToRemove = this.users.findIndex(curr => {
          if (curr._id === data._id) return curr;
        });
        if (indexToRemove !== -1) this.users.splice(indexToRemove, 1);
        this.loading = false;
      } else {
        this.errorMessage = message;
        this.loading = false;
      }
    } catch (error) {
      console.log("Error", error);
    }
  },

};


