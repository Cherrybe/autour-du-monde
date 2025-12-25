import {provideSSRWidth} from '@vueuse/core'

export default defineNuxtPlugin((nuxtApp) => {
  provideSSRWidth(nuxtApp.vueApp)
})