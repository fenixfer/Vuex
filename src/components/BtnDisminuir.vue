<template>
  <button @click="accionDisminuir(50)">Disminuir</button>
</template>

<script>
//mapActioons lo usamos para traer la accion de la tienda (store/index.js)
import {mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions(['accionDisminuir'])
    }

}
</script>

<style>

</style>