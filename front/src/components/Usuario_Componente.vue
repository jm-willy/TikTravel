<!-- <script>
    // import {UserStatusStore} from '@/stores/user_status'
    // const user_store = UserStatusStore();
    // import axios from 'axios'
    // import {ApiHostStore} from '@/stores/api_hosts'
    // import { ref } from 'vue';

    // export default {
    //     data() {
    //         return {
    //             greeting: 'Hello World!',
    //         }
    //     }
    // }
</script> -->

<script setup>
    import axios from 'axios'
    import {ApiHostStore} from '@/stores/api_hosts'
    import { ref } from 'vue';

    
    var self_page = false
    const profile_pic_url = ref('')
    var user_page_pics_urls = []
    
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
                profile_pic_url.value = response.data['profile_pic_src'];
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            //   console.log('profile_pic_url =', profile_pic_url);
            console.log('profile_pic_url =', profile_pic_url.value);
            });
    }
    
    function is_self_page() {
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
    // is_self_page();
    get_profile_pic();
    // window.setInterval(is_self_page, 2*60*1000); 
</script>

<template>
    <div>
        <div>
            <h2>Hola</h2>
            <img :src="profile_pic_url">
        </div>
    </div>
</template>