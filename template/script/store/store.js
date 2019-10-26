import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

//modules
import dashboard from './modules/dashboard.js'
import user from './modules/user.js'

//data
//import users_DATA from '../data/users_DATA.json'

Vue.use(Vuex);
Vue.config.devtools = true

export const store = new Vuex.Store({
state: {
	//users: users_DATA
},
getters: {
	//share lodash in '_' with all components 
	_:function(){
		return _; //_ is the value of lodash :return _ from 'lodash'
	}
},
mutations: {
	shuffle:function(state){
	 state.users = this.getters._.shuffle(state.users);
	}
},
modules:{
	dashboard,
	user
}
});
/*became like this
export const store = new Vuex.Store({
state: {
	users: users_DATA
},
getters: {
	//share lodash in '_' with all components 
	_:function(){
		return _; //_ is the value of lodash :return _ from 'lodash'
	}
},
mutations: {
	shuffle:function(state){
	 state.users = this.getters._.shuffle(state.users);
	}
},
state.dashboard:{
	.........
},
getters.dashboard:{
	.........
},
mutations.dashboard:{
	.........
},
actions.dashboard:{
	.........
}
});
this.$store.state.store.x ===> get x from original state
this.$store.state.dashboard.x ===> get x from dashboard state
reverse with getters , actions and mutations
*/