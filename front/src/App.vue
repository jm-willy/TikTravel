<script setup>
 import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <div>
      <Menu/>
      <RouterView/>
      <Footer/>
    </div>
</template>

<style src="./assets/output.css"></style>
