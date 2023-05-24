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
      <div class="container mx-auto py-4">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <label for="search" class="mr-2">Buscar:</label>
            <input type="text" id="search" v-model="searchText" class="py-1 px-2 border rounded-md">
          </div>
          <div>
            <label for="perPage" class="mr-2">Resultados por página:</label>
            <select id="perPage" v-model="perPage" class="py-1 px-6 border rounded-md">
              <option v-for="option in perPageOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
        </div>
        <table class="table-auto w-full border">
          <thead class="bg-gray-300">
            <tr>
              <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in pagedData" :key="item.id">
              <td v-for="column in columns" :key="column.key" class="text-center">{{ item[column.key] }}</td>
              <td class="text-center space-x-2">
                <button @click="editItem(item)" class="px-2 py-1 bg-blue-500 text-white rounded">Edit</button>
                <button @click="deleteItem(item)" class="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between items-center mt-4">
          <div>
            <p class="text-sm text-gray-600">
              Mostrando {{ firstIndex }} - {{ lastIndex }} de {{ filteredData.length }} resultados.
            </p>
          </div>
          <div>
            <button
              :disabled="currentPage === 1"
              @click="currentPage -= 1"
              class="py-1 px-4 bg-gray-200 rounded-md mr-2"
            >
              Anterior
            </button>
            <button
              :disabled="currentPage === pageCount"
              @click="currentPage += 1"
              class="py-1 px-4 bg-gray-200 rounded-md"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
</template>
