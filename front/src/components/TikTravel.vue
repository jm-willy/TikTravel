<template>
  <div id="fondo" class=" flex flex-col sm:justify-start sm:items-center min-h-screen bg-center">
    <div class="mt-2 mx-auto">
        <h1 id="animacion"> <p id="text" class="show text-6xl md:text-9xl text-gray-800">Bienvenido!</p></h1>
        <!-- <h1 id="animacion" class="text-4xl justify-center flex text-white"><img src="../../assets/t.png" alt="logo" class="w-10"> <p id="text">Tik Travel</p></h1> -->
    </div>

    <div class="container mx-auto w-full h-full">

      <div class="relative wrap overflow-hidden p-10 h-full">

        <div class="border-2-2 absolute border-opacity-50 border-white border-dashed h-full border" style="left: 50%"></div>

        <!-- right timeline -->
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 w-5/12"></div>

          <div class="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </h1>
          </div>

          <div id="animacion2" class="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <div class="flex">
              <img src="https://cdn1.iconfinder.com/data/icons/rcons-basic-work-and-office/16/internet_world_network_web_planet_earth_globe-512.png" class="mt-1 mr-2 w-6 h-6">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">¡Descubre el mundo con nosotros!</h3>
            </div>

            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-justify">
              En nuestro sitio web encontrarás una amplia variedad de destinos y ofertas de viaje 
              para que puedas planificar tus vacaciones de manera fácil y conveniente. <br>
              <b>¡Estamos seguros de que encontrarás el viaje perfecto para ti!</b>
            </p>

          </div>
        </div>
    
        <!-- left timeline -->
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 w-5/12"></div>

          <div class="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto text-gray-800 font-semibold text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </h1>
          </div>

          <div id="animacion3" class="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <div class="flex">
              <img src="https://cdn3.iconfinder.com/data/icons/camping-icons/369/Compass-512.png" class="mt-1 mr-2 w-6 h-6">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">¿Qué es lo que buscas?</h3>
            </div>

            <p class="text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100 text-justify">
              ¿Unas vacaciones relajantes en la playa? ¿O prefieres aventurarte en una ciudad desconocida? 
              ¿Quieres un viaje de lujo o una escapada económica? <br> Tenemos todo lo que necesitas para crear el viaje de tus sueños.
            </p>

          </div>
        </div>
        
        <!-- right timeline -->
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 w-5/12"></div>

          <div class="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </h1>
          </div>

          <div id="animacion2" class="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <div class="flex">
              <img src="https://cdn1.iconfinder.com/data/icons/business-1508/32/Teamwork-512.png" class="mr-2 w-7 h-7">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Nuestro Equipo</h3>
            </div>

            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Contamos con un equipo de expertos en viajes que están disponibles para ayudarte en todo momento. 
              Ya sea que necesites asesoramiento para elegir un destino, hacer una reserva o resolver cualquier problema, estamos aquí para ayudarte.
            </p>

          </div>
        </div>
    
        <!-- left timeline -->
        <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 w-5/12"></div>

          <div class="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto text-gray-800 font-semibold text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </h1>
          </div>

          <div id="animacion3" class="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <div class="flex">
              <img src="https://cdn0.iconfinder.com/data/icons/freebies-2/24/like-1-512.png" class="mr-2 w-6 h-6">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">Garantizamos una experiencia inolvidable</h3>
            </div>

            <p class="text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100 text-justify">
              Queremos que tus vacaciones sean inolvidables, desde el momento en que comienzas a planificar 
              tu viaje hasta el momento en que vuelves a casa. 
              <br> 
              <b>Te invitamos a explorar nuestra página web!!!</b>
            </p>

          </div>
        </div>

      </div>

    </div>

</div>
</template>

<style>
#fondo {
  background-image: url('../assets/f41.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
#animacion {
  animation: anim-lineUp 3s;
}

#animacion2{
  animation: fadeInRight 2s ease-in-out;
}
#animacion3{
  animation: fadeInLeft 2s ease-in-out;
}

::-webkit-scrollbar{
  display: none;
}

*{
  scrollbar-width: none; 
  -ms-overflow-style: none; 
}

@keyframes fadeInLeft{
  from{
    opacity: 0;
    transform: translate(-30px);
  }
  to{
    opacity: 1;
  }
}

@keyframes fadeInRight{
  from{
    opacity: 0;
    transform: translate(30px);
  }
  to{
    opacity: 1;
  }
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
  font-family: 'Sansita Swashed';
}
</style>
