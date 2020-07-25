import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 5000
})

// exibe uma mensagem de sucesso, no caso de ação bem-sucedida
Vue.toasted.register(
    'onSuccess',
    'Salvo com sucesso!', { type: 'success', icon: 'check' }
)

// exibe uma mensagem p/ indicar que a remoção ocorreu com sucesso
Vue.toasted.register(
    'onRemove',
    'Removido com sucesso!', { type: 'success', icon: 'check' }
)

// exibe uma mensagem de erro, no caso de ação mal-sucedida
Vue.toasted.register(
    'onError',
    payload => !payload.msg ? 'Ocorreu um erro! Por favor, tente novamente.' : payload.msg, { type: 'error', icon: 'times' }
)