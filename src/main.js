import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from 'axios'
import '../src/api/mock.js'
import {Button,Radio,Container,Main,Header,Aside,Menu,MenuItem,Submenu,MenuItemGroup,Dropdown,DropdownMenu,DropdownItem,Row,Card,Col, TableColumn,Table} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Radio);

Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);

//nav
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);

//header
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

//Home
Vue.use(Row);
Vue.use(Card);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);



Vue.prototype.$http =http
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
