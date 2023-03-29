<template>
  <input
    :value="modelValue"
    :v-model="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="regular__input"
    :type="type"
    :placeholder="placeholder"
  />
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.regular__input {
  padding: 11px 16px;
  background: #ffffff;
  border: 1px solid #d7dadd;
  border-radius: 4px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #424551;
}

.regular__input:focus {
  border: 1px solid rgba(0, 69, 131);
  outline: 0;
}
</style>
