import Antd from 'ant-design-vue'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import './assets/styles/global.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')
