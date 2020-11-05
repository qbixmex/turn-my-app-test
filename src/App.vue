<template>
  <div id="app">
    <Contact message="Formulario de Contacto" />
  </div>
</template>

<script>
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Contact
  }
}
</script>

<style>
#app {
  margin: 40px 0;
}
</style>
