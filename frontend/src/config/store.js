import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: true,
        user: {
            name: 'Usuário Mock',
            email: 'usuario@email.com'
        }
    },
    mutations: {
        menuToggle(state, isVisible) {

            if(isVisible === undefined)
                // recebe o inverso
                state.isMenuVisible = !state.isMenuVisible
            else
                state.isMenuVisible = isVisible

            //console.log('menu toggle = ' + state.isMenuVisible)
        }   

    }
})