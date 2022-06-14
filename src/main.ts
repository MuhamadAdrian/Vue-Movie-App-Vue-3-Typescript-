import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/index.css"

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

app.config.globalProperties.$filters = {
    truncate(text: string, num: number){
        const reqdtext = text.split("").slice(0, num).join("");
        if (text.split("").length > num) {
            
            return reqdtext + '...';
        }
        else {
            return text
        }
    }
}
