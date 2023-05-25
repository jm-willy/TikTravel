<script setup>
  import {UserStatusStore} from '@/stores/user_status'
  const user_store = UserStatusStore();
  import axios from 'axios'
  import {ApiHostStore} from '@/stores/api_hosts'

  var self_page = false
  var profile_pic_url = null
  var pics_urls = []

  const api_store = ApiHostStore()
  const base_host = api_store.get_api_host
  const axios_instance = axios.create({
    baseURL: base_host,
  });

  function get_profile_pic() {
    axios_instance.get('api/profile-pic')
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
          ;

      })
      .finally(function () {
          console.log('self_page =', self_page, 0);
      });
  }

  function page_data() {
      axios_instance.get('api-auth/hi')
      .then(function (response) {
          console.log(response);
          if (('/user/'+response.data['username']+'/') == window.location.pathname) {
            console.log(('/user/'+response.data['username']+'/'));
            self_page = true;
          } else {
            console.log(('/user/'+response.data['username']+'/'));
            self_page = false;
          };
      })
      .catch(function (error) {
          console.log(error);
          ;

      })
      .finally(function () {
          console.log('self_page =', self_page);
      });
  }
  page_data();
  window.setInterval(page_data, 2*60*1000);
</script>

<template>
    <div class="min-h-screen bg-gray-400">
        <div class="max-w-2xl mx-auto pt-48">
            <div class="sm:p-8 bg-gray-200 sm:rounded-lg shadow-xl">
                <h1 class="uppercase font-extrabold text-2xl text-center border-b-2 border-black">Configurar Información del Perfil</h1>
                <form class="mt-8" x-data="{password: '',password_confirm: ''}">
                    <div class="mx-auto max-w-lg ">
                        <div class="py-1">
                            <span class="px-1 text-sm text-gray-600">Username</span>
                            <input placeholder="" type="text"
                                   class="text-md block px-3 py-2 rounded-lg w-full
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                        </div>
                        <div class="py-1">
                            <span class="px-1 text-sm text-gray-600">Email</span>
                            <input placeholder="" type="email"
                                   class="text-md block px-3 py-2 rounded-lg w-full
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                        </div>
                        <div class="py-1">
                            <span class="px-1 text-sm text-gray-600">Password</span>
                            <input placeholder="" type="password" x-model="password"
                                   class="text-md block px-3 py-2 rounded-lg w-full
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                        </div>
                    </div>

                    <button type="submit" class="flex justify-center m-auto pt-3">  
                        <a class="relative items-center justify-start inline-block px-4 py-1 overflow-hidden font-bold rounded-full group">
                            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-500 opacity-100 group-hover:-translate-x-8"></span>
                            <span class="relative w-full text-left text-blue-500 transition-colors duration-200 ease-in-out group-hover:text-white">Guardar</span>
                            <span class="absolute inset-0 border-2 border-blue-500 rounded-full"></span>
                        </a>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>