<template>
    
    <div id="fondo_v">

        <div class="flex items-center min-h-screen">

            <div class="text-center pl-10 pr-10">
                <h1 id="animacion"> <p id="text" class="show md:text-7xl text-white">Descubre el mundo con nosotros <br> ¡ Tu aventura comienza aquí !</p></h1>
            </div>

            <Card/>

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