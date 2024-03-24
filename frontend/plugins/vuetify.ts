import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import colors from 'vuetify/util/colors';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    
    // defaults: {
    //   VBtn: {
    //     color: '#2f8bcc',
    //     variant: 'elevated',
    //     rounded: true,
    //   },
    // },
  
    theme: {
      // defaultTheme: 'dark',
      // themes: {
        // light: {
          // dark: false,
          // colors: {
          //   primary: colors.red.darken1, // #E53935
          //   secondary: colors.red.lighten4, // #FFCDD2
          //   background: '#FFFFFF',
          //   surface: '#FFFFFF',
          //   // primary: '#6200EE',
          //   'primary-darken-1': '#3700B3',
          //   // secondary: '#03DAC6',
          //   'secondary-darken-1': '#018786',
          //   error: '#B00020',
          //   info: '#2196F3',
          //   success: '#4CAF50',
          //   warning: '#FB8C00',
          // }
        // },
      // },
    },
  });
  app.vueApp.use(vuetify)
});
