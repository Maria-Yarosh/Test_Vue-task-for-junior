<template>
  <label
    class="checkbox"
    :class="{ 'checkbox--disabled': disabled }"
  >
    <input
      type="checkbox"
      :disabled="disabled"
      :checked="modelValue"
      @change="onChange"
    />
    <span class="checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
interface CheckboxProps {
  modelValue: boolean
  disabled?: boolean
  label?: string
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  disabled: false,
  label: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.checkbox input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.checkbox__label {
  user-select: none;
}
</style>
