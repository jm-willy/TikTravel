<template>
  <nav class="md:flex md:flex-grow items-center justify-items-center bg-blue-900 md:px-5 py-2 sticky opacity-90">

    <button class="flex items-center text-white p-1 px-2 md:ml-12 hover:bg-blue-200 rounded-full mx-auto my-1 md:my-auto">
        <img src="../assets/t.png" class="w-10">
        <RouterLink to="/" class="font-semibold text-2xl tracking-tight hover:text-blue-950">TikTravel</RouterLink>
        <!-- <span class="font-semibold text-xl tracking-tight"><RouterLink to="/">TikTravel</RouterLink></span> -->
    </button>

    <div class="flex md:flex-grow items-center justify-items-center mx-auto my-1 md:my-auto">
      <div class="flex md:flex-grow items-center justify-items-center mx-auto my-1 md:my-auto">
        <button class="hover:bg-blue-200 rounded-3xl p-3 group">
          <RouterLink to="/alojamientos" class="text-white p-1 group-hover:text-blue-950">Alojamientos</RouterLink>
        </button>
        <button class="hover:bg-blue-200 rounded-3xl p-3 group">
          <RouterLink to="/vuelos" class="text-white p-1 group-hover:text-blue-950">Vuelos</RouterLink>
        </button>
        <button class="hover:bg-blue-200 rounded-3xl p-3 group">
          <RouterLink to="/publicaciones" class="text-white p-1 group-hover:text-blue-950">Publicaciones</RouterLink>
        </button>
      </div>
    </div>

    <!-- <div class="text-sm flex md:flex-grow items-center justify-items-center mx-auto my-1 md:my-auto">
      <button class="hover:bg-blue-200 rounded-3xl p-3 mx-auto">
        <RouterLink to="/alojamientos" class="text-white p-1 hover:text-blue-950">Alojamientos</RouterLink>
      </button>
      <button class="hover:bg-blue-200 rounded-3xl p-3 mx-auto">
        <RouterLink to="/vuelos" class="text-white p-1 hover:text-blue-950">Vuelos</RouterLink>
      </button>
      <button class="hover:bg-blue-200 rounded-3xl p-3 mx-auto">
        <RouterLink to="/publicaciones" class="text-white p-1 hover:text-blue-950">Publicaciones</RouterLink>
      </button>
    </div> -->

    <div>
      <button class="flex items-center justify-items-center border border-white hover:bg-white rounded-lg md:mr-3 px-1 mx-auto my-2 md:my-auto group">
        <!-- aqui vvael routerlink sin <a></a> -->
        <a href="#" class="text-sm text-white group-hover:text-blue-900 p-2">Iniciar sesión</a>
      </button>
    </div>
  </nav>
</template>
  
  <script setup>

  </script>

<style>

</style>