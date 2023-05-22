<template>
    <div class="app-container flex justify-center items-end pb-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-blue-200 to-gray-100">

        <div class="absolute top-16 flex flex-col w-full items-center">

            <div class="flex flex-col text-center my-36">
                <span id="text" class="text-5xl mb-4">
                    ¿Dónde te gustaría viajar?
                </span>

                <span class="font-semibold">
                    ¡Explore nuevos lugares con nosotros!
                </span>
            </div>
            
            <div class="bg-white/50 w-10/12 px-6 pt-12 pb-16 app-shadow rounded-xl backdrop-blur-[200px]">

                <div class="flex pr-6 justify-center">
                    <label class="flex items-center cursor-pointer">
                        
                        <span class="font-semibold text-sm mr-6">Solo ida</span>

                        <div class="switch">
                            <input type="checkbox" class="switch-checkbox">

                            <div class="switch-bg"></div>
                            <div class="switch-indicator"></div>
                        </div>

                    </label>
                </div>

                <div class="flex mt-16">
                    <div class="bg-white/80 mx-6 flex flex-col w-1/3 p-6 rounded-xl border-2 border-white">
                        <span class="font-semibold text-xs app-color-lavendar">¿De dónde?</span>
                        
                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            /**/
                        </select>
                    </div>
                    <div class="bg-white/80 mx-6 flex flex-col w-1/3 p-6 rounded-xl border-2 border-white">
                        <span class="font-semibold text-xs app-color-lavendar">¿A dónde?</span>
                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            /**/
                        </select>
                    </div>
                    <div class="bg-white/80 mx-6 flex flex-col w-1/3 p-6 rounded-xl border-2 border-white">
                        <span class="font-semibold text-xs app-color-lavendar">Pasajeros</span>
                        <input type="number" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <!-- <span class="font-semibold text-lg app-color-black">2 adults, 3 children, 1 pet</span> -->
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
