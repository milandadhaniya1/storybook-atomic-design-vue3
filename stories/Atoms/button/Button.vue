<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script setup>
import "./Button.css";
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value) {
      return ["small", "medium", "large"].indexOf(value) !== -1;
    },
  },
  backgroundColor: {
    type: String,
  },
});

const emit = defineEmits(["click"]);

const classes = computed(() => ({
  "btn shadow border border-gray-400 rounded-full font-bold hover:opacity-80": true,
  "sb-btn--primary": props.primary,
  "sb-btn--secondary": !props.primary,
  [`sb-btn--${props.size || "medium"}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const onClick = () => emit("click");

</script>
