<template>
    
    <div id="fondo_v">

        <div class="flex items-center min-h-screen">

            <div class="text-center pl-10 pr-20">
                <h1 id="animacion"> <p id="text" class="show md:text-7xl text-white">Descubre el mundo con nosotros <br> ¡ Tu aventura comienza aquí !</p></h1>
            </div>

            <div class="max-w-lg lg:w-2/3 px-3">

                <div class="bg-white shadow-xl rounded-lg overflow-hidden">

                    <div class="bg-cover bg-center h-56 p-4" style="background-image: url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
                        <button class="flex float-right bg-gray-600 hover:bg-gray-700 rounded-lg px-1 justify-end">
                            <a href="#" class="text-sm text-white p-1.5">Reservar</a>
                        </button>
                    </div>

                    <div class="flex p-4 justify-around">

                        <div>

                            <div class="flex">
                                <p class="uppercase text-sm font-bold text-gray-700 mr-2">Título</p>
                            </div>
                            
                            <div class="flex items-center">
                                <p class="text-3xl text-gray-900">Precio</p>
                            </div>

                        </div>

                        <div class="flex items-center">
                            <p>Descripción</p>
                        </div>
                        
                    </div>

                    <h3 id="text" class="border-t border-gray-300 text-center text-3xl p-1">Vuelos</h3>

                    <div class="p-2  flex items-center justify-center">

                        <div class="bg-gray-200 flex flex-col w-32 p-3 rounded-xl border-2 border-white">
                            <span class="font-semibold text-sm text-center">Estancia</span>
                            <select id="underline_select" class="text-center block px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 focus:outline-none">
                                <option selected value="Option 3">Selecciona</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                                <option value="Option 4">Option 4</option>
                                <option value="Option 5">Option 5</option>
                            </select>
                        </div>

                        <div class="bg-gray-200 flex flex-col w-32 p-3 rounded-xl border-2 border-white">
                            <span class="font-semibold text-sm text-center">¿De dónde?</span>
                            <select id="underline_select" class="text-center block px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 focus:outline-none">
                                <option selected value="Option 3">Ubicación</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                                <option value="Option 4">Option 4</option>
                                <option value="Option 5">Option 5</option>
                            </select>
                        </div>

                        <div class="bg-gray-200 flex flex-col w-32 p-3 rounded-xl border-2 border-white">
                            <span class="font-semibold text-sm text-center">Hora</span>
                            <input type="time" class="text-center block px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 appearance-none focus:outline-none">
                        </div>

                        <div class="bg-gray-200 flex flex-col w-32 p-3 rounded-xl border-2 border-white">
                            <span class="font-semibold text-sm text-center">¿A dónde?</span>
                            <select id="underline_select" class="text-center block px-0 w-full text-sm bg-transparent border-b-2  focus:outline-none">
                                <option selected value="Option 3">Ubicación</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 2">Option 3</option>
                                <option value="Option 4">Option 4</option>
                                <option value="Option 5">Option 5</option>
                            </select>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        
    </div>
</template>

<script setup>
    import {UserStatusStore} from '@/stores/user_status'
    const user_store = UserStatusStore()
</script>

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
.app-container {
    width: 100%;
    height: 100vh;
}

.app-color-gray {
    color: #877F95;
}

.app-color-lavendar {
    color: #9EA1CF;
}

.switch-checkbox {
    display: none;
}

.switch {
    position: relative;
}

.switch-bg {
    height: 24px;
    width: 44px;
    background: #ff0000;
    border-radius: 15px;
}

.switch-indicator {
    position: absolute;
    height: 20px;
    width: 20px;
    background: #ffffff;
    border: 5px solid white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: .2s ease-out;
}

.switch-checkbox:checked~.switch-indicator {
    transform: translateX(100%);
}

.switch-checkbox:checked~.switch-bg {
    background: #00ff37;
}

#text {
    font-family: 'Lobster';
  }
</style>