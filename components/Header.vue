<template>
  <header class="header">
    <div class="header__cart-summary">
        <img src="/images/shopping-cart-outlined.svg" alt="Cart" class="header__cart-icon" />
        <div class="header__cart-info">
          <span>Ваша корзина</span>
          <span class="header__cart-info-items">{{ cart.totalItems }} товара</span>
          <span>{{ cart.totalPrice }} ₽</span>
        </div>
      </div>
  </header>
</template>

<script setup>
import { useCartStore } from '~/stores/cartStore'

const cart = useCartStore()

</script>

<style scoped>
.header {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 10px 80px;
  display: flex;
}

.header__cart-summary {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.header__cart-icon {
  width: 24px;
  height: 24px;
}

.header__cart-info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 16px;
}

.header__cart-info-items {
    color: var(--color-secondary);
}
</style>
