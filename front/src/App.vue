<script setup>
import {RouterView } from 'vue-router'
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
