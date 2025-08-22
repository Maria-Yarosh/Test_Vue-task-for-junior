<template>
  <div class="cart-item">
    <img :src="item.imageUrl" :alt="item.name" class="cart-item__image" loading="lazy"/>
    <div class="cart-item__details">
      <h3 class="cart-item__name">{{ item.name }}</h3>
      <p class="cart-item__description">{{ item.description }}</p>
      <p class="cart-item__article">Артикул: {{ item.article }}</p>
    </div>
    <div class="cart-item__quantity-controls">
      <Button
        variant="icon"
        :disabled="item.qty <= 1"
        @click="decrease"
        class="cart-item__counter-button cart-item__counter-button--minus"
      >-</Button>
      <span class="cart-item__qty">{{ item.qty }}</span>
      <Button
        variant="icon"
        @click="increase"
        class="cart-item__counter-button cart-item__counter-button--plus"
      >+</Button>
    </div>
    <p class="cart-item__price">{{ item.price }} ₽</p>
    <Button
      variant="icon"
      class="cart-item__remove-button"
      @click="remove"
    >×</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue'
import { useCartStore } from '~/stores/cartStore'
import type { CartItem as CartItemType } from '~/stores/cartStore'


// const props = defineProps<{
//   item: CartItemType
//   maxQty?: number
// }>()
interface Props {
  item: CartItemType
  maxQty?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxQty: 999
})

const cart = useCartStore()

const increase = () => cart.addQty(props.item.id)
const decrease = () => cart.removeQty(props.item.id)
const remove = () => cart.deleteItem(props.item.id)
</script>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr 190px 100px 50px;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-secondary);
  gap: 20px;
}

.cart-item__image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.cart-item__name {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 6px;
}

.cart-item__description {
  font-size: 12px;
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 6px;
}

.cart-item__article {
  color: var(--color-text-secondary);
  margin: 0;
  font-weight: 400;
  font-size: 14px;
}

.cart-item__quantity-controls {
  min-width: 102px;
  display: flex;
  align-items: center;
  gap: 2px;
  border-radius: 4px;
}

.cart-item__qty {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.cart-item__counter-button, .cart-item__qty {
  background-color: var(--color-secondary-background);
  min-height: 34px;
  min-width: 32px;
  text-align: center;
}

.cart-item__counter-button--minus {
    border-radius: 4px 0 0 4px;
}

.cart-item__counter-button--plus {
    border-radius: 0 4px 4px 0;
}

.cart-item__counter-button:hover {
    opacity: 0.7;
}

.cart-item__price {
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

.cart-item__remove-button {
  font-size: 20px;
  align-self: flex-start;
  border: none;
  background: none;
}

</style>