import{o as e,c as o,e as t,n as i,a as l,U as c,F as p,g as d,u as _,i as u,b as g}from"./index-e90bc6a7.js";const m={id:"card",class:"px-3 py-4"},v={class:"bg-white shadow-xl rounded-lg overflow-hidden"},b=t("button",{type:"submit",class:"flex float-right"},[t("a",{href:"#",class:"text-sm bg-gray-700 hover:bg-gray-800 rounded-lg px-2 text-white p-1.5"},"Reservado")],-1),x=[b],h=l('<h3 id="text" class="border-t border-gray-300 text-center text-3xl p-1">Viaje</h3><div class="p-2 flex items-center justify-around"><div class="bg-gray-200 flex flex-col w-32 p-3 rounded-xl border-2 border-white"><span class="font-semibold text-sm text-center">Estancia</span><select id="underline_select" class="text-center block px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 focus:outline-none"><option value="Option 3">Selecciona</option><option selected value="hotel">Hotel</option><option value="alojamiento">Alojamiento</option><option value="apartamento">Apartamento</option><option value="hostal">Hostal</option><option value="resort">Resort</option><option value="casa-rural">Casa rural</option></select></div><div class="bg-gray-200 flex flex-col w-32 p-3 rounded-xl border-2 border-white"><span class="font-semibold text-sm text-center">¿De dónde?</span><select id="underline_select" class="text-center block px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 focus:outline-none"><option value="Option 3">Ubicación</option><option selected value="ATL">Aeropuerto Internacional Hartsfield-Jackson (ATL)</option><option value="LAX">Aeropuerto Internacional de Los Ángeles (LAX)</option><option value="ORD">Aeropuerto Internacional de Chicago O&#39;Hare (ORD)</option><option value="LHR">Aeropuerto de Londres Heathrow (LHR)</option><option value="CDG">Aeropuerto de París-Charles de Gaulle (CDG)</option><option value="DXB">Aeropuerto Internacional de Dubái (DXB)</option><option value="HND">Aeropuerto Internacional de Haneda (HND)</option><option value="JFK">Aeropuerto Internacional John F. Kennedy (JFK)</option><option value="SYD">Aeropuerto Internacional Kingsford Smith de Sídney (SYD)</option></select></div></div>',2),f={__name:"Card_Reservas",props:{bg_img_src:""},setup(a){return(r,n)=>(e(),o("div",m,[t("div",v,[t("div",{class:"bg-cover bg-center h-56 p-4",style:i(a.bg_img_src)},x,4),h])]))}};const y={class:"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-100 to-gray-100 min-h-screen"},w={class:"flex justify-center pt-52"},A={__name:"Reservas_Component",setup(a){c().is_logged||window.location.replace(window.location.origin+"/login");var n=["background-image: url('https://upload.wikimedia.org/wikipedia/commons/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg')","background-image: url('https://ep00.epimg.net/elpais/imagenes/2017/04/18/album/1492501737_090856_1492503664_album_normal.jpg')"];return(D,k)=>(e(),o("div",y,[t("section",w,[(e(!0),o(p,null,d(_(n),s=>(e(),u(f,{key:s.id,bg_img_src:s},null,8,["bg_img_src"]))),128))])]))}},C={__name:"Reservas",setup(a){return(r,n)=>(e(),o("main",null,[g(A)]))}};export{C as default};
