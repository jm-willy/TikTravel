<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-900 p-6 sticky top-0">

    <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="../assets/t.png" class="w-10 mr-2">

      <span class="font-semibold text-xl tracking-tight"><RouterLink to="/">TikTravel</RouterLink></span>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
          <RouterLink to="/alojamientos">Alojamientos</RouterLink>
        </a>
        <a class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
          <RouterLink to="/vuelos">Vuelos</RouterLink>
        </a>
        <a class="block mt-4 lg:inline-block lg:mt-0 text-white">
          <RouterLink to="/publicaciones">Publicaciones</RouterLink>
        </a>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Iniciar sesión</a>
      </div>
    </div>
  </nav>
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
</template>
  
  <script setup>

  </script>

<style>

</style>