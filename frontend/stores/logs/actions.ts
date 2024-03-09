export const controller = 'logs'; // Controller name

export const actions = {

  async fetchLogs(skipNum: Number) {
    const token = useCookie('token');
    const bearerToken = token.value;
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      const { 
        logs, 
        success, 
        total, 
        message 
      }: any = await $fetch(`${config.public.apiBaseUrl}${controller}/get-logs`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (success) {
        this.logs = logs;
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

  async fetchLogsPaginate(skip: Number, limit: Number) {
    const token = useCookie('token');
    const bearerToken = token.value;
    this.loading = true;

    try {
      const config = useRuntimeConfig();
      this.limit = limit;

      const body = {
        skip: this.skip,
        limit: this.limit
      }
      const result: any = await $fetch(`${config.public.apiBaseUrl}${controller}/post-logs`, {
        method: 'POST',
        body: body,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      const { logs, success, total, message } = result;

      if (success) {
        this.logs.push(...logs);
        this.skip = this.skip + skip;
        this.total = total;
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

};