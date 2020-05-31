import Vue from 'vue'
//import Vuex from 'vuex'
import Router from 'vue-router'
import App from './components/app.vue'
import Github from './components/github.vue'
import Info from './components/info.vue'
import Docs from './components/docs.vue'
import Blog from './components/blog.vue'
//import {store} from './store/store'

//import _ from 'lodash';                              //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//import window._ from 'lodash';                       //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//Object.defineProperty(Vue.prototype,'$_',{value:_ }) //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//Vue.prototype._ = _;                                 //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//Vue.set(Vue.prototype, '_', _);                      //FAILED TO SHARE LODASH WITH ALL COMPONENTS FILE. 
//make the lodash a part of my component               //SUCCEEDED TO SHARE LODASH WITH ALL COMPONENTS FILE.
//or 
//add lodash in store with _:function(){return _;}     //SUCCEEDED TO SHARE LODASH WITH ALL COMPONENTS FILE.

//Vue.use(Vuex);
Vue.use(Router);

var links = [
  {path:'/', component: Info},
  {path:'/github', component: Github},
  {path:'/docs', component: Docs},
  {path:'/blog', component: Blog}
]
var SlyGuard = new Router({
  routes: links,
  mode: 'hash'
  /*////modes in vue router:
      1.history:(+) localhost:7200/a/ab/abc 'and' (-) you can't go to /a/ab or /a/ab/ac directly
      2.hash:(+) you can go to a/ab or a/ab/abc directly 'and' (-) the URL is written in bad version
        localhost:7200/#/a/ab/abc
      3.abstract:(-)don't go directly directly to any path 'and' (+) the URL is hidden just localhost:7200(example:www.facebook.com) show
      vis good for gestion app,web app,admin dashboard,finance app for concentrate and remove the confuse 
*/});

/*
//registre a global component
import Wide from './components/globalComponent.vue'
import Wdesc from './components/globalDescription.vue'
//Vue.component('Wide',Wide); the unique syntaxe
//Vue.component('vue-', Default); for global registration.
import Local from './components/localComponent.vue'
import Ldesc from './components/localDescription.vue'

//Vue.component('CV is a Contact Visual :D', Local)
//make a router
 Vue.use(Router);
 var links = [
 {
  path:'/',
  redirect:'/home',
  component:App
 },
 {
  path:'/global',
  component: Wide,
  children:[
            {
              path:'/global/globalDesc',
              component: Wdesc
            },
            {
              path:'/global/localDesc',
              component: Ldesc
            } 
              ]
            },
 {
  path:'/local',
  component: Local,
  children:[
            {
              path:'/local/globalDesc',
              component: Wdesc
            },
            {
              path:'/local/localDesc',
              component: Ldesc
            }
            ]
          }
 ]
 var SlyGuard = new Router({
  routes: links,
  mode: 'abstract'
 });*/
new Vue({
  el: '#app',
  router: SlyGuard,
  //store: store,
  //components: {'component-a': ComponentA,},//for local registration
  render: function(h){
    return h(App)
  }
});
/*
In essence
 1-
  function x(){
   return
  }
2-
  function x(){
   import
  }
3-
  function x(){
   require
  }
//import
 import z from 'vue' /vuex/ vue-router (ecosystem)
 Vue.use(z);
//////global registration in vue config file
 import C from '../a.vue' // extennsio is necessary
Vue.component("Name or v-name or vueName" don't mix dash and uppercase caractere in one name like B-vue or Bn-saprkel and don't use name with lowercase caracteres like html tags : C);
//////and local components import components and registre it in your components directly
  //components: {'component-a': ComponentA,},//for local registration
   or
  //components: {'ComponentA': ComponentA} 
              != 
    components: {ComponentA} 'just' in child father component not in the king father
//exemple App is the king father component
//App
// A
// B
//  c
//  d
//   e
//so registre e component in d locally (import vue in var and fill components in script),registre d and c in B locally,registre A and B in App locally
//or registre all components globally in App and share theme in father components with filling the components in the script of every father componnets
//the difference is import all components in vue config file and share theme 
//in my opinion registre components locally for more regulation and use globally registration just with vue router for more regulation because you forced to create routes in new vue router function in single file (vue config file) and the component is mostly present in father components
//and use
//for future i want to create store for managing components named 'Vuce' (Vue components = Vue c = vuec 'bad' = vuce'good') like vuex for managing data 
//-contain globally components and share it in router components form or locally components form
//create two frameworks 
/////1-poopvue.js ===>pvue.js the secondary
/////2-cue.js the origin
///////vue router is bad create an other router version like
///////
with import x from '../componnet/x.vue'
get the component in a x letter
and with require('../components/x.vue')
get the component without lettres
      
      file name: xx.vue
       <router fatherComponent>
         child:components{'child xxx':require('../components/xxx.vue')}
         father:components{'father xx':require('../componnets/xx.vue')}                   
       </router>
       or
      file nme: xxx.vue
       <router childComponent>
         child:none
         father:components{'father xx':xx}                   
       </router>
///////<i18n></i18n>
///////<template></template>
///////<script></script>
///////<style lang="scss" module|scoped|emoji|..></style>
/////3-create a library like lodash
///////lodesc (load/dash/hash/desc is '_'/esc/description/(hescing like hashing) 


vue instance
////+vue-router
     //in king father component
      links{path:'',component: C,children{[{path:'',component: B},{path:'',component: A}]}}
      in final SlyGuard = new Router({routes: links}) // routes is the link between every path and his components
     //for work in father components
      father component
       <router-link to go to primary X component
       <router-view for viewing the X component content
        in X component
         exist a another router like this
         <router-link to go to secondary x component
         <router-view to view x content in father father components
         ////steps***
         1.
         father component[contain content + button], when(@click on button(router-link))
         2. 
         he goes to X component content showed, when(@click on button(router-link in X component)) 
         3.
         he goes to x component content
         =>/X/x
         -->vue router hack
          existe
          =>/X/x
          =>/Y/y
          the hack::
           ->/X/x and /X/y and /X/x/y and /X/y/x
           how? : put a router-link in X go to='/X/x' and to='/X/y' and to='/X/y/x' and to='/X/x/y'
           ->/Y/y and /Y/x and /Y/x/y and /Y/y/x
           how? : the same
           ---->>> put in every component a router-link to get a child component and a router-view to show the component content
                   with the father component content
                   except the little child component don't write in him a router-link or router-view
           ؛PF:please focus ""='' don't forget this
////+vuex store
          state
          getters
          mutations
          actions
          modules
           component a {states,getters,actions,mutations}
           component b {states,getters,actions,mutations}
////+el app (component contains all components)
          component
          component
          component
          //local or global
          component
          component
*/