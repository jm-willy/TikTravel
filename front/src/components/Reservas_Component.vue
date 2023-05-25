<!-- <script>
export default {
  data() {
    return {
      searchText: '',
      perPage: 5,
      currentPage: 1,
      columns: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'email', label: 'Email' },
        { key: 'password', label: 'Contaseña' },
        // Agrega más columnas según tu estructura de datos
      ],
      data: [

      ], // Aquí se almacenarán los datos obtenidos de la base de datos
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(item => {
        // Filtrar por la columna 'name' y 'email'. Puedes ajustar los campos según tu estructura de datos
        return (
          item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.email.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    },
    pagedData() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredData.slice(startIndex, endIndex);
    },
    firstIndex() {
      return (this.currentPage - 1) * this.perPage + 1;
    },
    lastIndex() {
  return Math.min(this.currentPage * this.perPage, this.filteredData.length);
},
pageCount() {
  return Math.ceil(this.filteredData.length / this.perPage);
},
perPageOptions() {
  return [5,10,20]; // Opciones para seleccionar resultados por página
},
},
methods: {
    editItem(item) {
      // Implementa la lógica para editar el elemento
      console.log("Editar:", item);
    },
    deleteItem(item) {
      // Implementa la lógica para eliminar el elemento
      console.log("Eliminar:", item);
      if (confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
      const index = this.data.findIndex((element) => element.id === item.id);
      if (index !== -1) {
        this.data.splice(index, 1);
        console.log("Elemento eliminado:", item);
      }
    }
    },
  },
// mounted() {
//   // Aquí puedes realizar la conexión con la base de datos y obtener los datos
//   // Por ejemplo, utilizando axios para hacer una solicitud HTTP
//   axios.get('/api/data').then(response => {
//     this.data = response.data;
//   }).catch(error => {
//     console.error(error);
//   });
// },
};
</script> -->
<script setup>
    import {UserStatusStore} from '@/stores/user_status'
    const user_store = UserStatusStore();
    if (!(user_store.is_logged)) {
    window.location.replace(window.location['origin']+'/login');
    }
</script>

<template>
      <div class="min-h-sreen">
        AQUI SE INSERTARAN LAS TARJETAS QUE RESERVA EL USUARIO
      </div>
</template>
