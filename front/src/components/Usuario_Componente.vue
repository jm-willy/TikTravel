<script setup>
    import axios from 'axios'
    import {ApiHostStore} from '@/stores/api_hosts'
    import { ref } from 'vue';

    
    const self_page = ref(false)
    const profile_pic_url = ref('')
    const user_page_pics_urls = ref([])
    const user_found = ref('')
    
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
                if (response.data['message'] == 'User does not exist') {
                    user_found.value = false;
                } else {
                    user_found.value = true;
                }
            })
            .catch(function (error) {
                console.log(error);
                user_found.value = false;
            })
            .finally(function () {
            // console.log('profile_pic_url =', profile_pic_url.value);
        });
    }
    
    function get_userpage_pics() {
        let data = {'current_user_page': window.location.pathname};
        axios_instance.post('api/userpage-pics', data=data)
        .then(function (response) {
            user_page_pics_urls.value = response.data['userpage_pics_srcs'];
            if (response.data['message'] == 'User does not exist') {
                user_found.value = false;
            } else {
                user_found.value = true;
            }
            })
            .catch(function (error) {
                console.log(error);
                user_found.value = false;
            })
            .finally(function () {
            // console.log();
            });
    }
    
    function is_self_page() {
        axios_instance.get('api-auth/hi')
        .then(function (response) {
            console.log(response);
            if (('/user/'+response.data['username']+'/') == window.location.pathname) {
            self_page.value = true;
            } else {
            self_page.value = false;
            };
        })
        .catch(function (error) {
            console.log(error);

        })
        .finally(function () {
            console.log('self_page =', self_page.value);
        });
    }

    is_self_page();
    get_profile_pic();
    get_userpage_pics();
    // window.setInterval(is_self_page, 2*60*1000); 
</script>

<template>
    <div>
        <div v-if="user_found">
            <h2>Foto perfil</h2>
            <div>
                <img :src="profile_pic_url" width="200" height="200">
            </div>
            <br>
            <h2>Fotos usuario</h2>
            <section class='px-13 overflow-y-scroll max-h-[39rem]'>
                <img v-for="i in user_page_pics_urls" :src="i" class="py-3"/>
            </section>
            <br>
            <section v-if="self_page">
                <form>Cambair contraseña</form>
                <form>Subir fotos de pagina</form>
                <form>Etc</form>
            </section>
        </div>
        <div v-else>This user doesn't exist yet</div>
    </div>
</template>