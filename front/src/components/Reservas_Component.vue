<script setup>
    import {UserStatusStore} from '@/stores/user_status'
    const user_store = UserStatusStore();
    if (!(user_store.is_logged)) {
    window.location.replace(window.location['origin']+'/login');
    }
  var styles_list = [
    "background-image: url('https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')",
    "background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1280px-Bandera_de_Espa%C3%B1a.svg.png')",
    "background-image: url('')",
    "background-image: url('')",
    "background-image: url('')",
  ];
</script>

<template>
      <div class="container mx-auto">
        <section class='px-2 overflow-y-scroll max-h-[40rem] fade-in'>
          <Card v-for="item in styles_list" :key="item.id" :bg_img_src="item"/>
        </section>
      </div>
</template>
