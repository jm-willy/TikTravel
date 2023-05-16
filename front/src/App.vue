<script setup>
 import {RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import HomeView from './views/HomeView.vue';

</script>

<template>
    <div>
      <Menu/>
      <RouterView/>
      <Footer/>
    </div>
</template>

<style src="./assets/output.css"></style>
