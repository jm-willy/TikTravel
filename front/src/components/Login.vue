<template>
    <form action="">
        <div class="bg-gray-300 min-h-screen flex flex-col justify-center sm:py-12">

            <div class="relative py-3 sm:max-w-xl sm:mx-auto">

                <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                <div class="relative bg-white shadow-lg sm:rounded-3xl sm:p-20">

                    <div class="max-w-md mx-auto">

                        <div>
                            <RouterLink to="/"><img src="../assets/t.png" class="w-16 m-auto mb-4" alt="logo"></RouterLink>
                            <h1 class="text-2xl font-semibold text-center pr-20 pl-20">Inicia sesión</h1>
                        </div>

                        <div class="divide-y divide-gray-200">

                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                <div class="relative">
                                    <input autocomplete="off" id="email" name="email" type="email" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required/>
                                    
                                    <label for="email" class=" flex absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="mr-1 w-4 bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                        </svg>
                                        Correo electrónico
                                    </label> 
                                </div>

                                <div class="relative">
                                    <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required/>
                                    <label for="password" class="flex absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class=" mr-1 w-4 bi bi-file-lock2" viewBox="0 0 16 16">
                                            <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z"/>
                                            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                                        </svg>
                                        Contraseña
                                    </label>
                                </div>

                                <div class="flex justify-between">
                                    <div class="flex items-center">
                                        <p class="text-sm">¿No tienes cuenta?<RouterLink to="/register" class="hover:text-blue-700 font-bold">  Entra aquí</RouterLink></p>
                                    </div>
                                
                                    <button type="submit" class="flex items-center justify-center" @click="log_user">  
                                        <a class="relative items-center justify-start inline-block px-4 py-1 overflow-hidden font-bold rounded-full group">
                                            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-500 opacity-100 group-hover:-translate-x-8"></span>
                                            <span class="relative w-full text-left text-blue-500 transition-colors duration-200 ease-in-out group-hover:text-white">Enviar</span>
                                            <span class="absolute inset-0 border-2 border-blue-500 rounded-full"></span>
                                        </a>
                                    </button>
                                
                                </div>


                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>
        
    </form>
</template>

<style>
    #fondo1{
        background-image: url(../assets/f.jpg);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

<script setup>
    import axios from 'axios'

    function log_user() {
        axios.get('https://pokeapi.co/api/v2/pokemon/1')
        .then(function (response) {
            // handle success
            console.log(response.data.name, 2);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            alert(error);
        })
        .finally(function () {
            // always executed
        });
    }
</script>