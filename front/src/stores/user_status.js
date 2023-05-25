import { defineStore } from 'pinia'


export const UserStatusStore = defineStore('user status', {
    state: () => ({ is_logged: false, admin: false }),  //current_user: null
    actions: {
      yes_logged() {
        this.is_logged = true;
      },
      not_logged() {
        this.is_logged = false;
      },
    },
  }
)