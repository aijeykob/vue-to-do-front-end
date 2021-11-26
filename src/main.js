import {createApp} from 'vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import '@mdi/font/css/materialdesignicons.min.css'
import App from './App.vue'
import router from './router'
const app = createApp(App).use(router)
new WaveUI(app, {
    // Some Wave UI options.
})

app.mount('#app')

