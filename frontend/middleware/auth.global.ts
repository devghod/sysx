export default defineNuxtRouteMiddleware(async (to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const { verify, logoutUser } = useAuthStore();
  const token = useCookie('token'); // get token from cookies
  const directory = to?.name;

  if (directory === 'index') {
    if (!token.value) {
      return
    } else {
      await verify();

      if (authenticated.value) {
        return navigateTo('/dashboard');
      } else {
        logoutUser();
        return
      }
    }
  }

  if (directory === 'login' && token.value) {
    await verify();

    if (authenticated.value) {
      return navigateTo('/dashboard');
    } else {
      logoutUser();
      abortNavigation();
      return navigateTo('/login');
    }
  }

  if (!token.value && directory !== 'login') {
    abortNavigation();
    return navigateTo('/login');
  }

  // if (token.value && !['login','index'].includes(directory)) {
  if (token.value && directory !== 'login' && directory !== 'index') {
    await verify();
   
    if (!authenticated.value) {
      logoutUser();
      abortNavigation();
      return navigateTo('/login');
    }
  };
});