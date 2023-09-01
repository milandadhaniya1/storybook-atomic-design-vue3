<template>
    <label class="block text-gray-700 text-sm font-bold flex flex-col">
        <span :class="{'text-red-600': error}">{{ label }}</span>
        <input :type="type" :name="name" :id="id" :value="value" :class="classes" :required="required" :placeholder="placeholder">
    </label>
    <span v-if="message && message !== ''" :class="{'label text-xs whitespace-pre': true, 'text-red-600': error, 'text-gray-500': !error}">
      {{ message }}
    </span>
</template>

<script setup>
import "./Textbox.css";
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: "text",
    validator: function (value) {
      return ["text", "date", "email", "password", "time", "datetime"].indexOf(value) !== -1;
    },
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: false,
    default: null,
  },
  value: {
    type: String,
    required: false,
    default: null,
  },
  label: {
    type: String,
    required: false,
    default: "",
  },
  placeholder: {
    type: String,
    required: false,
    default: "",
  },
  class: {
    type: String,
    required: false,
    default: "",
  },
  error: {
    type: Boolean,
    required: false,
    default: false,
  },
  message: {
    type: String,
    required: false,
    default: "",
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  }
});

const classes = computed(() => ({
  "shadow border border-gray-400 font-normal text-color": true,
  "py-2 px-3 mt-2 leading-tight": true,
  "sb-btn--primary": props.primary,
  "border-red-600": props.error,
  class: true,
}));

</script>
