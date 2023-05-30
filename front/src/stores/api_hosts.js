import { defineStore } from 'pinia'


export const ApiHostStore = defineStore('debug status', {
    state: () => ({ dev_host: 'http://localhost:5173', debug_host: ['http://localhost:8000', 'http://127.0.0.1:8000'], production_host: 'https://tiktravel.herokuapp.com'}),
    getters: {
      get_api_host(state) {
        if (state.debug_host.includes(window.location.origin)) {
          return window.location.origin;
        } else if (window.location.origin == state.dev_host) {
          return state.debug_host[0];
        } else {
          // return state.production_host;
          return '';
        }
      },
      is_dev(state) {
        if (window.location.origin == state.debug_host) {
          return true;
        } else {
          return false;
        }
      }
    },
  }
)