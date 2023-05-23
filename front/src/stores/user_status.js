import { defineStore } from 'pinia'


export const UserStatusStore = defineStore('user status', {
    state: () => ({ logged: false, admin: false }),
    actions: {
      yes_logged() {
        this.logged = true;
      },
      not_logged() {
        this.logged = false;
      },
    },
  }
)