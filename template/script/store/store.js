import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex);

export const store = Vuex.Store({
getters:{
	_:function(){
		return _;
	}
}
});