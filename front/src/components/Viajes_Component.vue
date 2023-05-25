  <script setup>
    import Card from '../components/Card.vue'
    var card_list = [Card, Card, Card, Card, Card];
    // data() {
    //   return {
    //     items: [{ message: 'Foo' }, { message: 'Bar' }]
    //   }
    // }
  </script>

<template>
    
    <div id="fondo_v">

        <div class="flex items-center min-h-screen">

            <div class="text-center px-10">
                <h1 id="animacion"> <p id="text" class="show md:text-6xl text-white">Descubre el mundo con nosotros <br> ¡ Tu aventura comienza aquí !</p></h1>
            </div>

            <section class='px-2 overflow-y-scroll max-h-[39rem] fade-in'>
              <Card v-for="item in card_list" :key="item.id" />
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
  animation: fade-in-animation 1s ease-in forwards;
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
    animation: anim-lineUp 3s;
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