<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">

type ButtonVariant = 'primary' | 'secondary' | 'icon' | 'link' | 'outlined'
type ButtonSize = 'normal' | 'small' | 'large'
interface ButtonProps {
  label?: string
  disabled?: boolean
  fullWidth?: boolean
  variant?: ButtonVariant
  class?: string
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  label: '',
  disabled: false,
  fullWidth: false,
  variant: 'primary',
  size: 'normal',
  type: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  'button',
  `button--${props.variant}`,
  `button--${props.size}`,
  {
    'button--disabled': props.disabled,
    'button--full-width': props.fullWidth
  },
  props.class
])


const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  box-sizing: border-box;
}

.button:focus-visible {
  outline: 2px solid var(--color-primary);
}

.button:not(.button--disabled):hover {
  opacity: 0.8;
}

.button:not(.button--disabled):active {
  transform: translateY(0);
}

.button--primary {
  background: var(--color-primary);
  color: var(--color-light);
}

.button--secondary {
  background: var(--color-secondary);
  color: var(--color-text);
}

.button--outlined {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

.button--icon {
  background: transparent;
  min-height: auto;
  padding: 8px;
  font-size: 16px;
}

.button--link {
  background: transparent;
  color: var(--color-secondary);
  text-decoration: underline;
  min-height: auto;
}

.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.button--full-width {
  width: 100%;
}

.button--normal {
  min-height: 54px;
  font-size: 16px;
}

.button--small {
  min-height: 36px;
  padding: 8px 16px;
  font-size: 14px;
}

.button--large {
  min-height: 64px;
  padding: 16px 32px;
  font-size: 18px;
}

</style>