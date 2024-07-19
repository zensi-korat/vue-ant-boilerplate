import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import Antd from 'ant-design-vue'
// import { addons } from '@storybook/preview-api'
import 'ant-design-vue/dist/reset.css'
import '../src/assets/styles/main.scss'
// import { DARK_MODE_EVENT_NAME } from 'storybook-darkmode-vue'
import { globalTokens, componentTokens } from '../src/config/token'
// import { useThemeSwitcher } from '../src/context/composables/useThemeSwitcher'

setup((app) => {
  app.use(Antd)
})

// const withDarkMode = (storyFn: any) => {
//   const { setThemeColor } = useThemeSwitcher()
//   const channel = addons.getChannel()

//   const handleColorScheme = (isDarkMode: boolean) => {
//     setThemeColor(isDarkMode ? 'dark' : 'default')
//   }

//   channel.on(DARK_MODE_EVENT_NAME, handleColorScheme)

//   return {
//     components: { Story: storyFn() },
//     setup() {
//       // Ensure cleanup when the story is unmounted
//       return {
//         onBeforeUnmount() {
//           channel.off(DARK_MODE_EVENT_NAME, handleColorScheme)
//         }
//       }
//     },
//     template: '<Story />'
//   }
// }

const withThemeProvider = (storyFn: any) => ({
  components: { Story: storyFn() },
  setup() {
    const theme = {
      token: globalTokens,
      components: componentTokens
    }

    return {
      theme
    }
  },
  template: '<a-config-provider :theme="theme"><Story /></a-config-provider>'
})

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
