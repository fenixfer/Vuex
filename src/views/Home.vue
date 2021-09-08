<template>
  <div class="home">
    <!--Asi accedemos al componente que se declara en store es global y se puede utilizar en cualquier vista-->
    <!--Este componente declarado en store/index.js no es necesario declararlo aqui como components-->
    <!--Esto sirve pero no es optimo <h1>Mi contador: {{ $store.state.contador}}</h1>-->
    <!--//TODO: Hacemos el llamado del contador de la propiedad computada -->
    <!--style para hacer dinámico con (:)-->
    <!--En el style traemos el método de la propiedad computada declarada abajo-->
    <h1 :style="colorContador">
      <!--Ocupamos el data sin problema como con el titulo -->
      {{titulo}}: {{contador}}
    </h1>

    <!--traemos lo del método accionIcrementar que se utilizo acccion y en la accion se tiene a dentro la mutación 
    //TODO: Siempre se hace esto encapsular las mutaciones en acciones-->
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminuir />
    <hr>
    <!--Podemos utilizar props también y como estara dinámico ponemos los (:)-->
    <BotonAccion :estado='true'/>
    <BotonAccion :estado='false'/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//TODO: Llamamos a vuex para usar los estados entre componentes
//Utilizamos el mapState para mapear las mutaciones 
//mapMutations es para que funcione el mutations de index.js y este se mapea en los metodos
//De igual forma como ocupamos acciones del index.js importamos el mapActions
import {mapState, mapMutations, mapActions} from 'vuex'
//El mapActions igual se mapea en methods 
//Llamamos el componente BtnDisminuir
import BtnDisminuir from '../components/BtnDisminuir.vue'
//llamamos al BotonAccion.vue
import BotonAccion from '../components/BotonAccion.vue'
export default {
  name: 'Home',
  components: {
    
  },
  //TODO: También podemos ocupar data() sin problemas
  data() {
    return {
      titulo: 'Mi contador Vuex',
    }
  },
  //Utilizando propiedades computadas
  computed: {
    //el array es porque posiblemebte haya varias propiedades en el state
    ...mapState(['contador']),
    //con los ... de mapear mapState podemos poner mas cosas metodos, propiedades, etc...
    colorContador(){
      //Esta parte del contador [contador.....] podia ir al style pero igual no es recomendable
      //TODO: Accedemos al contador de la store/index.js con this
      return [this.contador > 100 ? {'color':'green'} : {'color': 'red'}]
    }
  },
  methods:{
    ...mapMutations(['incrementar']), //Este 'incrementar lo llamamos de la mutación pero no lo ocupamos
    // ...mapMutations(['incrementar','disminuir']), Este lo hice bien pero aqui no va
    ...mapActions(['accionIncrementar'])
    //...mapActions(['accionIncrementar','accionDisminuir']) Este también pero aqui no va
  },
  components: {
    BtnDisminuir,
    BotonAccion
  }
}
</script>
