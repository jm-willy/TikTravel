<script setup>
import Card from '../components/Card.vue'
var styles_list = [
  "background-image: url('https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')",
  "background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1280px-Bandera_de_Espa%C3%B1a.svg.png')",
  "background-image: url('')",
  "background-image: url('')",
  "background-image: url('')",
];
</script>

<template>

<div id="fondo_v">

    <div class="flex items-center min-h-screen">

        <div class="text-center px-10 pl-28">
            <h1 id="animacion"> <p id="text" class="show md:text-6xl text-white">Descubre el mundo con nosotros <br> ¡ Tu aventura comienza aquí !</p></h1>
        </div>

        <section class='px-2 overflow-y-scroll max-h-[40rem] fade-in'>
          <Card v-for="item in styles_list" :key="item.id" :bg_img_src="item"/>
        </section>

    </div>
    
</div>
</template>


<style>
#fondo_v {
background-image: url('../assets/image.jpg');
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;

}

.fade-in {
opacity: 0;
animation: fade-in-animation 2s ease-in forwards;
}

@keyframes fade-in-animation {
from {
opacity: 0;
}
to {
opacity: 1;
}
}

section {
scrollbar-width: none; 
-ms-overflow-style: none; 
}

section::-webkit-scrollbar {
display: none; 
}

::-webkit-scrollbar{
display: none;
}

*{
scrollbar-width: none; 
-ms-overflow-style: none; 
}

#animacion {
animation: anim-lineUp 2s;
}

@keyframes anim-lineUp {
0% {
  opacity: 0;
  transform: translateY(30%);
}
100% {
  opacity: 1;
  transform: translateY(0%);
}
}

#text {
font-family: 'Lobster';
}
</style>