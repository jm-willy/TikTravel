<template>
  <!-- Nav no inicio sesión -->
  <nav class="md:flex md:flex-grow items-center justify-items-center bg-blue-900 md:px-5 py-2 sticky top-0 z-50" v-if="user_store.logged">

    <button class="flex items-center text-white p-1 px-2 md:ml-12 rounded-full mx-auto my-1 md:my-auto">
        <img src="../assets/t.png" class="w-10 mr-2">
        <RouterLink to="/" class=" link-underline link-underline-black text-2xl tracking-tight" id="text">TikTravel</RouterLink>
        <!-- <span class="font-semibold text-xl tracking-tight"><RouterLink to="/">TikTravel</RouterLink></span> -->
    </button>

    <div class="flex md:flex-grow items-center justify-items-center mx-auto my-1 md:my-auto">
      <div class="flex md:flex-grow items-center justify-items-center mx-auto my-1 md:my-auto">
        <button class="p-3">
          <RouterLink to="/viajes" class="text-gray-200 p-1 hover:text-white font-medium">Viajes</RouterLink>
        </button>
        <button class="p-3">
          <RouterLink to="/publicaciones" class="text-gray-200 p-1 hover:text-white font-medium">Publicaciones</RouterLink>
        </button>
        <button class="p-3">
          <RouterLink to="/reservas" class="text-gray-200 p-1 hover:text-white font-medium">Reservas</RouterLink>
        </button>
      </div>
      <button class="flex items-center justify-items-center border border-white hover:bg-white rounded-lg md:mr-3 px-1 mx-auto my-2 md:my-auto group">
        <!-- aqui va el routerlink sin <a></a> -->
        <a href="#" class="text-sm text-white group-hover:text-blue-900 p-2"><RouterLink to="/#">USUARIO</RouterLink></a> 
      </button>
    </div>
  </nav>

  <nav class="md:flex md:flex-grow items-center justify-items-center bg-blue-900 md:px-5 py-2 sticky top-0 z-50" v-else>

    <button class="flex items-center text-white p-1 px-2 md:ml-12 rounded-full mx-auto my-1 md:my-auto">
        <img src="../assets/t.png" class="w-10 mr-2">
        <RouterLink to="/" class=" link-underline link-underline-black text-2xl tracking-tight" id="text">TikTravel</RouterLink>
        <!-- <span class="font-semibold text-xl tracking-tight"><RouterLink to="/">TikTravel</RouterLink></span> -->
    </button>

    <div class="flex md:flex-grow items-center justify-items-center mx-auto my-1 md:my-auto">
      <div class="flex md:flex-grow items-center justify-items-center mx-auto my-1 md:my-auto">
        <button class="p-3">
          <RouterLink to="/viajes" class="text-gray-200 p-1 hover:text-white font-medium">Viajes</RouterLink>
        </button>
        <button class="p-3">
          <RouterLink to="/publicaciones" class="text-gray-200 p-1 hover:text-white font-medium">Publicaciones</RouterLink>
        </button>
        <div class=" h-8 w-px bg-gray-300"></div>
        <div class="flex">
          <button class="p-3">
            <!-- aqui vvael routerlink sin <a></a> -->
          <RouterLink to="/login" class="text-white p-1" id="m">Inicia sesión</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </nav>

</template>
  
<script setup>
    import {UserStatusStore} from '@/stores/user_status'
    const user_store = UserStatusStore()
</script>
<style>
#text {
    font-family: 'Lobster';
  }
  .link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 2px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}

	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#FFFFFF, #FFFFFF)
	}

	.link-underline:hover {
		background-size: 100% 2px;
		background-position: 0 100%
	}

  #m {
    position: relative;
    color: #ffffff;
    text-decoration: none;
  }
  
  #m:hover {
    color: #ffffff;
  }
  
  #m::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  
  #m:hover::before {
    transform: scaleX(1);
  }

</style>