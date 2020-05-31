import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

//modules
import dashboard from './modules/dashboard.js'
import user from './modules/user.js'

//data
import products_DATA from '../data/products.json'

Vue.use(Vuex);
Vue.config.devtools = true

export const store = new Vuex.Store({
state: {
	greet: 'greeting',
	hi: 'hi!',
	hello: 'hello',
	score: 0
},
getters: {
	//in getters get a data from state and edit, amend or built it to prepare before taking, without events like click.
	//share lodash in '_' with all components 
	_:function(){
		return _; //_ is the value of lodash: return _ from 'lodash'
	},
},
mutations: {
	//the only way to change or edit a state by an event click or hover... is by using mutations.

		//return {x: state.hi += '!',y: state.todos.length += 1}
		//return [state.hi += '!',state.todos.length += 1]
		//state.todos.length is false just put state.todos without property 
	increment:function(state,methodsValue){
		//every mutation has one commit to do don't put two or more commits like this example below
		//state.hi += '!'
		state.score += methodsValue
	},
	editString:function(state, b){
		state.hi += b
	}
	
},
actions: {
	edit:function(context, b){
		context.commit('editString', b)
	}
	/*
	var x =['a']                               a var 1=1
	var z=['a'.toString.length*2/3+6-1*4....]  a var x=z
	==> ['a'] = z                              a var 1=12125*84521+566-54/88
	==> x=['a']                                a var x=1
	=====>this how frameworks created          a var z=x
	/*edit:function({commit}){
		commit('edit')
	} = edit:function({commit}){
     	//hidden function
	      var s = select: function(o){
	      o.commit[0] = commit('edit') =>this
	      o.commit[1] = commit('add')
	
	        return o.commit[0];}
	    //
	  return s;
     }
      see below for other explaination
     var c = edit:function({commit}){
     	//hidden function
	      var s = select: function(o){
	      o.commit[0] = commit('edit') =>this
	      o.commit[1] = commit('add')
	
	        return o.commit[0];}
	    //
	  return s;
     }
     now comes the change of variables
     var x = edit:function({commit}){
		commit('edit')
	} = c
       
	*/
	//{commit}={[x]} :=> a={commit} && commit=[x,y] && x=commit('edit') & y=commit('add')
	/*{commit:[
	         {commit: commit('edit')},
	         {commit: commit('remove')},
	         {commit: commit('add')}
	         
	    ]}*/ 
	    // the problem is the 'commit' name is the name of mutation functions.
	    //and mutation function has registred in object form
	    /// and 'commit' is the name of the table who contains all objects
	    //
	    	//{commit}=commit =>context.{commit} = context.commit
	//*for select a mutation from mutationsObj example 'mutName' mutation :
	//**{commit('mutName')}=commit('mutName') =>context.{commit('mutName')} = context.commit('mutName') but you can't put selector in function params
	//***edit:function(context){	context.commit('edit') }, edit:function(context.{commit}){ commit('edit') }
    //****
	//commit.{commit:'commit'}=>commit.commit:'commit'=commit this how the store select the commit 
	//and this how the actions function select the commit ->
	//actionsFunctionSelect.commit.{commit: 'commit'}
	//=>actionsFunctionSelect.commit.commit : 'commit' = actionsFunctionSelect.commit
	//in object : -> 'it is' = in origin
    /*actionsObj:{
    	dispatch:{
    		dispatch({ {edit:'edit'},{payload:none} }),
    		dispatch({ {edit:'edit'},{payload:10} })
    	}
    } and select with select function _>select function(o){
    	this.actionsObj.filter(o){
    		return [o.edit,o.payload];
    		returned this.return.check(c){
    			if(edit:'edit'){
                  do 'edit'
    			}
    		}
    	}
    }
	mutationsObj:{
		commit:{commit('edit'),commit('increment')}

	}*/
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
/////****PS new information*******////	
	//remise:function(state){
	   /*in json file
		"price":price=25
		"price":o.price=price=25 convert object from var
		o.price=price=25
    return state.producs.map(function(o){
    	return o.price=o.price-10
    })
	
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
this.$store.state.user.x ===> get x from original state
this.$store.state.dashboard.x ===> get x from dashboard state
reverse with getters , actions and mutations

lodash:{x,y,u,e,r,t,z}

import _ from 'lodash' => import {x} from 'lodash'
_.x , _.y , ....       => x.x=x(directly) , x.z , x.y


*/