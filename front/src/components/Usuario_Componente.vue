<!-- <script setup>
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
    // headers: {'HTTP_CSFRTOKEN': ''},
  });


  function api_login_status() {
      // let header = {'csfrtoken': document.cookie};
      // axios.get(api_store.get_host+'api-auth/hi', {headers: header})
      // axios.defaults.headers.common['HTTP_CSFRTOKEN'] = document.cookie;
      // console.log(axios.defaults.headers);
      axios_instance.get('api-auth/hi')
      .then(function (response) {
          console.log(response);
          user_store.yes_logged();
      })
      .catch(function (error) {
          console.log(error);
          user_store.not_logged();

      })
      .finally(function () {
          console.log('logged =', user_store.is_logged);
      });
  }
  api_login_status();
  window.setInterval(api_login_status, 2*60*1000);
</script> -->

<template>
    <div>
        <div>
            <h2>Hola</h2>
        </div>
    </div>
</template>