import { createStore } from 'vuex'

export default createStore({
  //objeto unico el state es como la data()
  state: {
    contador: 100
  },
  //TODO: LO QUE MODIFICA AL STATE ES LA MUTACIÓN
  mutations: {
    //Igual aqui el payload es el numero que se nos pasa por parametros de BtnDisminuir.js
    incrementar(state, payload) {
      state.contador = state.contador + payload
    },
    //payload es el numero que pasamos de las acciones que es el parámetro de BtnDisminuir
    disminuir(state, payload) {
      state.contador = state.contador - payload
    }
  },
  //TODO: SIEMPRE LAS ACCIONES LLAMAN A UNA MUTACIÓN
  actions: {
    //el commit ejecuta una mutación
    accionIncrementar({commit}){
      //ejecutamos el mismo commit y llamamos a la mutación incremetar(state)
      commit('incrementar', 10)
    },
    //TODO: El numero se recibe del parámetro BtnDisminuir
    //TODO: Y este mismo lo tiene que mandar a las mutaciones
    accionDisminuir({commit}, numero){
      commit('disminuir', numero)
    },
    //TODO: Para recibir mas de un parámetro llamamos un objeto(podemos poner cualquier nombre pero mejor objeto) y ese objeto tendtra varios parámetros
    accionBoton({commit}, objeto){
      //Esta acción es la que aumenta o disminulle el saldo 
      if (objeto.estado) {
        //este incrementar viene de las mutaciones
        commit('incrementar', objeto.numero)
      } else {
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
