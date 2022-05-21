import Vue from 'vue'
import Vuex from 'vuex'
import {
	deepFind
} from '../utils/index'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		comments:JSON.parse(localStorage.getItem('comments'))||[]
		},
	mutations: {
		addComment(state, data) {
			if (data.sup) {
				let commentSup = deepFind(state.comments, data.sup)
				commentSup.subComment.unshift(data)

			} else {
				state.comments.unshift(data)
			}
			localStorage.setItem('comments', JSON.stringify(state.comments));
		}
	},
	actions: {},
	modules: {}
})
