import Vue from 'vue'
import Router from 'vue-router'
import App from './components/app.vue'
import Github from './components/github.vue'
import Info from './components/info.vue'
import Docs from './components/docs.vue'
import Blog from './components/blog.vue'

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
  //components: {'component-a': ComponentA,},//for local registration
  render: function(h){
    return h(App)
  }
});