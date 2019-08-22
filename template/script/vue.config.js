import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './components/app.vue'
import Github from './components/github.vue'
import Info from './components/info.vue'
import Docs from './components/docs.vue'
import Blog from './components/blog.vue'
import {store} from './store/stores'
//import _ from 'lodash';                              //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//import window._ from 'lodash';                       //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//Object.defineProperty(Vue.prototype,'$_',{value:_ }) //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//Vue.prototype._ = _;                                 //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//Vue.set(Vue.prototype, '_', _);                      //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE. 
//make the lodash a part of my component               //SUCCEEDED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//or 
//add lodash in store with _:function(){return _;}     //SUCCEEDED TO SHARE LODASH WITH ALL COMPONENTS FILE.

Vue.use(Vuex);
Vue.use(Router);

var links = [
  {path:'/', component: Info},
  {path:'/github', component: Github},
  {path:'/docs', component: Docs},
  {path:'/blog', component: Blog}

]
var navigation = new Router({
  routes: links,
  mode: 'history'
});
//Vue.component('vue-', Default); for global registration.
new Vue({
  el: '#app',
  router: navigation,
  store: store,
  //components: {'component-a': ComponentA,},//for local registration
  render: function(h){
    return h(App)
  }
});