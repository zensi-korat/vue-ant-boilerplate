import type { Preview } from '@storybook/vue3'
import { componentTokens, globalTokens } from '../src/config/token'
import { setup } from '@storybook/vue3'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import '../src/assets/styles/main.scss'

setup((app) => {
  app.use(Antd)
})

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
