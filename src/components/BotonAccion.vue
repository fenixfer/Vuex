<template>
<!--TODO: Como en la accion de index.js (accionBoton({commit}, objeto)) 
se pasa un objeto, entonces aqui lo definimos ya que son como 2 propiedades -->
  <button @click="accionBoton({estado: estado, numero: 10})">{{ textoBoton }}</button>
</template>

<script>
//Mapeamos lasas acciones de index.js pero importamos el vuex primero para mapear
import {mapActions} from 'vuex'

export default {
    props: {
        estado: Boolean
    },
    computed: {
        textoBoton(){
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    },
    // y lo mapeamos en los métodos la accion la cual es accionBoton de index.js
    methods:{
        ...mapActions(['accionBoton'])
    } 
}
</script>

<style>

</style>