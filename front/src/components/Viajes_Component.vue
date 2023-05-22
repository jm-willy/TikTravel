<template>
    
    <div id="fondo_v">

        <div class="flex items-center justify-center min-h-screen">

            <div class="max-w-lg lg:w-2/3 px-3">

                <div class="bg-white shadow-xl rounded-lg overflow-hidden">

                    <div class="bg-cover bg-center h-56 p-4" style="background-image: url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
                        <button class="flex float-right items-center" data-title="Reservar">
                            <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                              </svg>
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

                    <div class="p-4 border-t border-gray-300 flex items-center justify-center">

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
    background-image: url('../assets/viajes.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }

[data-title]:hover:after {
    opacity: 1;
    transition: all 0.1s ease 0.5s;
    visibility: visible;
}
[data-title]:after {
    content: attr(data-title);
    background-color: #172554;
    color: #fff;
    font-size: 14px;
    position: absolute;
    padding: 3px 20px;
    bottom: -2.2em;
    z-index: 99999;
    left: 100%;
    box-shadow: 1px 1px 3px #222222;
    opacity: 0;
    border-radius: 6px;
    
}
[data-title] {
    position: absolute;
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