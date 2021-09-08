<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Mi contador: {{ $store.state.contador}}</h1>
    <!-- //TODO: Utilizando v-model, v-model hace comunicación con algun dato que tengamos en la data o componente -->
    <input type="text" v-model='texto'>
    <h2>{{ texto }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      texto: ''
    }
  },
}
</script>