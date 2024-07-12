// import type { Preview } from '@storybook/vue3'
// import 'ant-design-vue/dist/antd.css' // Import Ant Design Vue styles
// import Antd from 'ant-design-vue' // Import Ant Design Vue library

// app.use(Antd) // Use Ant Design Vue globally

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i
//       }
//     }
//   }
// }

// export default preview

// .storybook/preview.js

import 'ant-design-vue/dist/antd.css' // Import Ant Design Vue styles
import Antd from 'ant-design-vue' // Import Ant Design Vue library

export const decorators = [
  (story) => ({
    components: { story },
    setup() {
      return { args: {} }
    },
    template: '<a-config-provider :locale="locale"><story /></a-config-provider>',
    created() {
      this.$app = this.$app || {}
      this.$app.use(Antd)
    }
  })
]

const preview = {
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
