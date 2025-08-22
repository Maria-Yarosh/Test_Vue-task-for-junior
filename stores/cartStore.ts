import { defineStore } from 'pinia'

export interface CartItem {
  id: string
  name: string
  price: number
  qty: number
  imageUrl: string
  description: string
  article: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      {
        id: 'G2H',
        name: 'Вытяжное устройство G2H',
        price: 12644,
        qty: 1,
        imageUrl: '/images/g2h.png',
        description: '12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия',
        article: 'G2H1065'
      },
      {
        id: 'BXC',
        name: 'Вытяжное устройство BXC',
        price: 12644,
        qty: 2,
        imageUrl: '/images/bxc.png',
        description: 'Описание для BXC',
        article: 'BXC1234'
      },
      {
        id: 'GHN',
        name: 'Вытяжное устройство GHN',
        price: 12644,
        qty: 1,
        imageUrl: '/images/ghn.png',
        description: 'Описание для GHN',
        article: 'GHN5678'
      }
    ] as CartItem[],
    installation: false as boolean
  }),
  getters: {
    totalItems: (state): number =>
      state.items.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: (state): number =>
      state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  },
  actions: {
    addQty(id: string) {
      const item = this.items.find(i => i.id === id)
      if (item) item.qty++
    },
    removeQty(id: string) {
      const item = this.items.find(i => i.id === id)
      if (item && item.qty > 1) item.qty--
    },
    deleteItem(id: string) {
      this.items = this.items.filter(i => i.id !== id)
    },
    toggleInstallation() {
      this.installation = !this.installation
    },
    clearCart() {
      this.items = []
    },
    async submitOrder() {
      const order = {
        items: this.items,
        installation: this.installation,
        total: this.totalPrice
      }

      try {
        const res = await $fetch('/api/order', {
          method: 'POST',
          body: order
        })
        alert('Заказ успешно оформлен!')
      } catch (e) {
        console.error(e)
        alert('Ошибка при оформлении заказа')
      }
    }
  }
})