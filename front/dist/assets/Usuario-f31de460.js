import{A as C,r as i,d as U,o as l,c as n,e,f as N,F as q,g as F,a as d,b as G}from"./index-1fa89350.js";const V={class:"min-h-screen bg-blue-100"},B={key:0},A={key:0},I={class:"max-w-2xl mx-auto pt-4"},L={class:"sm:p-8 bg-blue-200 sm:rounded-lg shadow-xl"},S=e("h1",{class:"uppercase font-extrabold text-2xl text-center border-b-2 border-black"},"Configurar Información del Perfil",-1),E={class:"mt-8","x-data":"{password: '',password_confirm: ''}"},H={class:"mx-auto max-w-lg"},P={class:"m-auto"},R=e("div",{class:"flex justify-center pb-2"},[e("span",{class:"text-base font-bold text-gray-600"},"Foto de perfil")],-1),T=["src"],$={class:"py-1"},z=e("span",{class:"px-1 text-sm text-gray-600"},"Nombre",-1),D=["value"],J=e("input",{required:"",placeholder:"",type:"text",name:"usern",class:"text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"},null,-1),K=d('<button type="submit" class="flex justify-center m-auto pt-3"><a class="relative items-center justify-start inline-block px-4 py-1 overflow-hidden font-bold rounded-full group"><span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span><span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-500 opacity-100 group-hover:-translate-x-8"></span><span class="relative w-full text-left text-blue-500 transition-colors duration-200 ease-in-out group-hover:text-white">Guardar</span><span class="absolute inset-0 border-2 border-blue-500 rounded-full"></span></a></button>',1),M={class:"py-1"},O=e("span",{class:"px-1 text-sm text-gray-600"},"Correo electronico",-1),Q=["value"],W=e("input",{required:"",placeholder:"",type:"email",name:"email",class:"text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"},null,-1),X=d('<button type="submit" class="flex justify-center m-auto pt-3"><a class="relative items-center justify-start inline-block px-4 py-1 overflow-hidden font-bold rounded-full group"><span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span><span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-500 opacity-100 group-hover:-translate-x-8"></span><span class="relative w-full text-left text-blue-500 transition-colors duration-200 ease-in-out group-hover:text-white">Guardar</span><span class="absolute inset-0 border-2 border-blue-500 rounded-full"></span></a></button>',1),Y={class:"py-1"},Z=e("span",{class:"px-1 text-sm text-gray-600"},"Contraseña",-1),ee=["value"],te=e("input",{required:"",placeholder:"",type:"password","x-model":"password",name:"passw",class:"text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"},null,-1),se=d('<button type="submit" class="flex justify-center m-auto pt-3"><a class="relative items-center justify-start inline-block px-4 py-1 overflow-hidden font-bold rounded-full group"><span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span><span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-500 opacity-100 group-hover:-translate-x-8"></span><span class="relative w-full text-left text-blue-500 transition-colors duration-200 ease-in-out group-hover:text-white">Guardar</span><span class="absolute inset-0 border-2 border-blue-500 rounded-full"></span></a></button>',1),oe={class:"py-1"},ae=e("span",{class:"px-1 text-sm text-gray-600"},"Foto de perfil",-1),le=["value"],ne=e("input",{required:"",placeholder:"",type:"file",name:"profile_pic_file",class:"text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"},null,-1),re=d('<button type="submit" class="flex justify-center m-auto pt-3"><a class="relative items-center justify-start inline-block px-4 py-1 overflow-hidden font-bold rounded-full group"><span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span><span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-500 opacity-100 group-hover:-translate-x-8"></span><span class="relative w-full text-left text-blue-500 transition-colors duration-200 ease-in-out group-hover:text-white">Guardar</span><span class="absolute inset-0 border-2 border-blue-500 rounded-full"></span></a></button>',1),ie=e("br",null,null,-1),ce=e("h1",{class:"uppercase font-extrabold text-2xl text-center border-b-2 border-black p-4"},"Imagenes subidas",-1),ue={class:"px-13 overflow-y-scroll max-h-[40rem]"},de=["src"],pe=e("br",null,null,-1),_e={key:1,class:"flex justify-center min-h-screen items-center"},he=e("h1",null,[e("p",{id:"text",class:"show text-2xl text-gray-800"},"This user doesn't exist yet")],-1),fe=[he],be={__name:"Usuario_Componente",setup(b){const o=C(),p=o.get_api_host+"/api-auth/change-password",g=o.get_api_host+"/api-auth/change-email",m=o.get_api_host+"/api-auth/change-username",x=o.get_api_host+"/api-auth/upload-profile-pic",c=i(!1),_=i(""),h=i([]),a=i("");if(o.is_dev)var f=o.get_api_host;else var f=window.location.origin+"/";const u=U.create({baseURL:f}),r=i("");function y(){u.get("api-auth/x-csrf-token").then(function(t){console.log(t),console.log(t.headers["x-csrftoken"]),r.value=t.headers["x-csrftoken"]}).catch(function(t){console.log(t)}).finally(function(){})}y();function v(){let t={current_user_page:window.location.pathname};u.post("api/profile-pic",t=t).then(function(s){console.log(s),_.value=s.data.profile_pic_src,s.data.message=="User does not exist"?a.value=!1:a.value=!0}).catch(function(s){console.log(s),a.value=!1}).finally(function(){})}function w(){let t={current_user_page:window.location.pathname};u.post("api/userpage-pics",t=t).then(function(s){h.value=s.data.userpage_pics_srcs,s.data.message=="User does not exist"?a.value=!1:a.value=!0}).catch(function(s){console.log(s),a.value=!1}).finally(function(){})}function k(){u.get("api-auth/hi").then(function(t){console.log(t),"/user/"+t.data.username+"/"==window.location.pathname?c.value=!0:c.value=!1}).catch(function(t){console.log(t)}).finally(function(){console.log("self_page =",c.value)})}return k(),v(),w(),(t,s)=>(l(),n("div",V,[e("div",null,[a.value?(l(),n("div",B,[c.value?(l(),n("section",A,[e("div",I,[e("div",L,[S,e("form",E,[e("div",H,[e("div",P,[R,e("img",{src:_.value,class:"m-auto object-cover w-20 h-20 rounded-full hover-image-1 flex-shrink-0"},null,8,T)]),e("form",{action:m,method:"post"},[e("div",$,[z,e("input",{type:"hidden",name:"csrfmiddlewaretoken",value:r.value},null,8,D),J]),K]),e("form",{action:g,method:"post"},[e("div",M,[O,e("input",{type:"hidden",name:"csrfmiddlewaretoken",value:r.value},null,8,Q),W]),X]),e("form",{action:p,method:"post"},[e("div",Y,[Z,e("input",{type:"hidden",name:"csrfmiddlewaretoken",value:r.value},null,8,ee),te]),se]),e("form",{action:x,method:"post"},[e("div",oe,[ae,e("input",{type:"hidden",name:"csrfmiddlewaretoken",value:r.value},null,8,le),ne]),re])])])])])])):N("",!0),ie,ce,e("section",ue,[(l(!0),n(q,null,F(h.value,j=>(l(),n("img",{src:j,class:"py-3 w-2/3 m-auto"},null,8,de))),256))]),pe])):(l(),n("div",_e,fe))])]))}},me={__name:"Usuario",setup(b){return(o,p)=>(l(),n("main",null,[G(be)]))}};export{me as default};
