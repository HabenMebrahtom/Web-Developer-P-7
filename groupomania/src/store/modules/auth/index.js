import getters from './getters';
import actions from './actions'
import mutations from './mutations';

export default {
    namespaced: true,
    state() {
        return {
            name: 'Haben Mebrahtom'
        }
    }, 
    getters,
    actions,
    mutations
}