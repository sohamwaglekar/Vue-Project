import vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLs from 'secure-ls'
var ls = new SecureLs({ isCompression: false });

vue.use(vuex)
import auth from './auth'

export default new vuex.Store({
    modules: {
        auth
    },
    plugins: [createPersistedState({
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
        }
    }
        
    )],

})