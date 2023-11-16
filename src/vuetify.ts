import { createVuetify } from "vuetify"

import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"

import { ru } from "vuetify/locale"

export default createVuetify({
  locale: {
    locale: "ru",
    fallback: "en",
    messages: { ru },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          "background": "#ffffff",
          "surface": "#ffffff",
          "primary": "#795548",
          "primary-darken-1": "#795548",
          "secondary": "#ff9800",
          "secondary-darken-1": "#ff9800",
          "disabled": "#e0e0e0",
          "success": "#4caf50",
          "warning": "#ffc107",
          "error": "#f44336",
          "info": "#03a9f4",
          "on-background": "#000000",
          // 'on-surface': '#9f9f9f',
          // 'on-primary': '#795548',
          "on-secondary": "#ffffff",
          "on-disabled": "#9e9e9e",
          // 'on-success': '#4caf50',
          // 'on-warning': '#ffc107',
          // 'on-error': '#f44336',
          // 'on-info': '#03a9f4',
        },
      },
    },
  },
})
