import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isGuest: 0
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2
  },
  actions: {
    setLoggedout() {
      this.isGuest = true
    },
    setLoggedIn() {
      this.isGuest = false
    },
    setIsGuest(isGuest){
      this.isGuest = isGuest
    }
  }
})
