<template>
  <div class="cart__summary">
    <h2>Итого</h2>
    <div class='cart-summary__price'>
        <span>Cумма заказа</span>
        <span>{{ cart.totalPrice }} ₽</span>
    </div>
    <div class="cart-summary__items">
        <span>Количество</span>
        <span>{{ cart.totalItems }}</span>
    </div>
    <div class='cart-summary__installation'>
        <span>Установка</span>
        <span>{{ cart.installation ? 'Да' : 'Нет' }}</span>
    </div>
    <div class='cart-summary__line' />
    <div class="cart-summary__goods">
        <span>Cтоимость товаров</span>
        <span>{{ cart.totalPrice }} ₽</span>
    </div>
    <Button
      variant="primary"
      label="Оформить заказ"
      :disabled="cart.totalItems === 0"
      @click="cart.submitOrder"
      :fullWidth="true"
      class='cart-summary__button-order'
    />

    <Button
      variant="outlined"
      label="Купить в один клик"
      :fullWidth='true'
      class='cart-summary__button-order cart-summary__button-quick-order'
    />
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue'
import { useCartStore } from '~/stores/cartStore'

const cart = useCartStore()
</script>

<style>
.cart__summary {
  background-color: var(--color-secondary-background);
  max-width: 420px;
  max-height: 458px;
    width: 100%;
    padding: 30px 35px;
    border-radius: 6px;
}


.cart-summary__price,
.cart-summary__items,
.cart-summary__installation,
.cart-summary__goods {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-family: "Roboto", sans-serif;
}
.cart-summary__price,
.cart-summary__items,
.cart-summary__installation {
    font-size: 16px;
}

.cart-summary__price,
.cart-summary__items {
    margin-bottom: 18px;
}

.cart-summary__goods {
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--color-text);
}

.cart-summary__button-order {
    color: var(--color-light);
    font-size: 18px;
    font-weight: 600;
}

.cart-summary__line {
    height: 1px;
    background: var(--color-secondary);
    margin: 28px 0 10px 0;
}


.cart-summary__button-quick-order {
    margin-top: 12px;
    color: var(--color-primary);
}

</style>