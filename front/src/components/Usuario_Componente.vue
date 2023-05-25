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
    let data = {'current_user_page': window.location.pathname};
    axios_instance.post('api/profile-pic', data=data)
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
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
            self_page = true;
          } else {
            self_page = false;
          };
      })
      .catch(function (error) {
          console.log(error);

      })
      .finally(function () {
          console.log('self_page =', self_page, 1);
      });
  }
  page_data();
  get_profile_pic();
  window.setInterval(page_data, 2*60*1000);
</script>

<template>
    <div>
        <div>
            <h2>Hola</h2>
        </div>
    </div>
</template>