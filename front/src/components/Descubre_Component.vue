<template>
  <div>

    <div class="flex justify-center p-3 bg-gray-200">
      <ul class="flex items-center flex-shrink-0 space-x-6">
        <!-- Profile menu -->
        <li class="relative ">
          <button class="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
            <img class="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=203" alt="" aria-hidden="true">
          </button>
        </li>

              <li class="relative">
          <button class="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
            <img class="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=205" alt="" aria-hidden="true">
          </button>
        </li>

              <li class="relative">
          <button class="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
            <img class="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=207" alt="" aria-hidden="true">
          </button>
        </li>

              <li class="relative">
          <button class="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
            <img class="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=209" alt="" aria-hidden="true">
          </button>
        </li>

            <li class="relative">
          <button class="align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none">
            <img class="object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0" src="https://picsum.photos/200/200?i=2011" alt="" aria-hidden="true">
          </button>
        </li>

      </ul>

    </div>

    <div class="flex justify-center pt-10 pb-10">
        <div class="bg-slate-800 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">
       <!-- header -->
       <div class="flex space-x-4 items-center">
         <div class="w-12 h-12">
           <img
               alt="avatar"
               src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
               class="rounded-full w-full h-full object-cover ">
           <div>
           </div>
         </div>
         <div class="space-y-2">
           <div class="flex space-x-2 items-center">
             <h2 class="text-base"> John Doe</h2>
             <svg class="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
             </svg>
           </div>
           <p class=" text-xs text-slate-400">Fecha</p>
         </div>

       </div>
       <!--content-->
       <div>
         <p class="text-sm leading-6 text-slate-300">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
           Aliquid, laudantium explicabo assumenda, animi facere aperiam ex facilis expedita ut fugit vero? 
           Cum, alias? Iure accusantium dolor aliquam cupiditate nostrum quaerat!
         </p>
       </div>


       <!-- image grid-->


       <div class="grid grid-cols-6 col-span-2   gap-2  ">
         <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
           <img class="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt="">
         </div>
         <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
           <img class="h-full w-full object-cover  "
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
                alt="">
         </div>
         <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
           <img class="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="">
         </div>
         <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
           <img class="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="">
         </div>
         <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
           <div
               class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
             + 23
           </div>
           <img class="h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                alt="">
         </div>
       </div>
     </div>

     <div class="bg-slate-800 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">
        <!-- header -->
        <div class="flex space-x-4 items-center ">
          <div class="w-12 h-12"
          >
            <img
                alt="avatar"
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                class="rounded-full w-full h-full object-cover ">
            <div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex space-x-2 items-center">
              <h2 class="text-base"> John Doe</h2>
              <svg class="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p class=" text-xs text-slate-400">Fecha</p>
          </div>

        </div>
        <!--content-->
        <div>
          <p class="text-sm leading-6 text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquid, laudantium explicabo assumenda, animi facere aperiam ex facilis expedita ut fugit vero? 
            Cum, alias? Iure accusantium dolor aliquam cupiditate nostrum quaerat!
          </p>
        </div>


        <!-- image grid-->


        <div class="grid grid-cols-6 col-span-2   gap-2  ">
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <img class="h-full w-full object-cover "
                 src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                 alt="">
          </div>
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <img class="h-full w-full object-cover  "
                 src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
                 alt="">
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <img class="h-full w-full object-cover "
                 src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                 alt="">
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <img class="h-full w-full object-cover "
                 src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                 alt="">
          </div>
          <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <div
                class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
              + 23
            </div>
            <img class="h-full w-full object-cover "
                 src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                 alt="">
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
