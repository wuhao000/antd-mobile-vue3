import App from '@/views/app.vue';
import 'highlight.js/styles/atelier-cave-dark.css';
import Vue, {createApp} from 'vue';
import zhCn from './packages/moment-zh_CN';
import router from './router';
import store from './store';
import VueClipboard from 'vue-clipboard2';

moment.updateLocale('zh-cn', zhCn);

// Vue.config.productionTip = false;
const app = createApp(App);

app.use(VueClipboard as any);
/**
 * 注册全局指令，hljs在router跳转时被清除
 */
app.directive('hljs', el => {
  const blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});
app.use(router);
app.use(store);
app.mount('#app')
if (location.pathname === '/') {
  router.push('/install');
}
