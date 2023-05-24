import { defineStore } from 'pinia'


export const ApiHostStore = defineStore('debug status', {
    state: () => ({ dev_host: 'http://localhost:5173', debug_host: 'http://127.0.0.1:8000/', production_host: 'https://tiktravel.example/'}),
    getters: {
      get_api_host(state) {
        if (window.location.origin == state.dev_host) {
          return state.debug_host;
        } else {
          return state.production_host;
        }
      },
      is_dev(state) {
        if (window.location.origin == state.dev_host) {
          return true;
        } else {
          return false;
        }
      }
    },
  }
)