<template>
  <div class="cart">
    <div class="cart-info__container">
      <div class="cart-items">
        <div class="cart__header">
      <div class="cart__header-title">
          <h1 class="cart__title">Ваша корзина</h1>
      <p class="cart__title-total">{{ cart.totalItems }} {{ getWordItem(cart.totalItems) }}</p>
      </div>
      <Button
        label="Очистить корзину"
        variant="link"
        @click="cart.clearCart"
        class="cart__header__link-remove"
      />
    </div>
        <CartItem v-for="item in cart.items" :key="item.id" :item="item" />
        <div class="cart-installation">
          <Checkbox
          v-model="cart.installation"
          :disabled="cart.totalItems === 0"
          >
          <div class="cart-installation_wrapper">
            <img src="/images/installation.png" alt="installation" class="cart-installation__icon" />
          <div class="cart-installation__text-container">
            <span class="cart-installation__title">Установка</span>

            <span class="cart-installation__text">
                Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров
            </span>
          </div>
          </div>

        </Checkbox>
        </div>
      </div>
     <CartSummary />
    </div>
  </div>
</template>

<script setup lang="ts">
import CartItem from '~/components/CartItem.vue'
import CartSummary from '~/components/CartSummary.vue'
import Button from '~/components/Button.vue'
import { useCartStore } from '~/stores/cartStore'
import { getWordItem } from '~/utils/wordFormatter'

const cart = useCartStore()

</script>

<style>
.cart {
  margin: 0 auto;
  padding: 80px;
}

.cart__header {
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
  justify-content: space-between;

}

.cart__header-title {
  display: flex;
  text-align: center;
  align-items: baseline;
  gap: 20px;
}

.cart__title {
  margin: 0;
  font-size: 44px;
}

.cart__title-total {
  color: var(--color-secondary);
}

.cart-info__container {
  display: flex;
  justify-content: space-between;
  gap: 56px;
  align-items: flex-start;
}


.cart-installation_wrapper {
    display: flex;
    gap: 20px;
}

.cart-installation {
  margin-top: 44px;
  background-color: var(--color-secondary-background);
  padding: 26px;
  border-radius: 4px;
  display: flex;
  align-items: center;
   gap: 20px;
}

.cart-installation__text-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cart-installation__title {
  font-size: 16px;
  font-weight: 500;
}

.cart-installation__text {
  font-size: 16px;
  color: var(--color-text);
}

.cart-installation__icon {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.cart__header__link-remove {
    color: var(--color-secondary)
}

.cart__header__link-remove:hover {
    opacity: 0.8
}
</style>