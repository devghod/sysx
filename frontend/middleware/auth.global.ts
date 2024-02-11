export default defineNuxtRouteMiddleware(async (to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const { verify } = useAuthStore();
  const token = useCookie('token'); // get token from cookies
  
  if (to?.name === 'index') {
    if (!token.value) {
      return
    } else {
      await verify();

      if (authenticated.value) {
        return navigateTo('/dashboard');
      } else {
        return
      }
    }
  }

  if (token.value && to?.name === 'login') {
    await verify();

    if (authenticated.value) {
      return navigateTo('/dashboard');
    } else {
      abortNavigation();
      return navigateTo('/login');
    }
  }

  if (!token.value && to?.name !== 'login') {
    abortNavigation();
    return navigateTo('/login');
  }

  if (token.value) verify();
});