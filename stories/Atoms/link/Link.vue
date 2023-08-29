<template>
  <a :href="url" :title="altTitle?altTitle:title" :target="target" :class="classes">{{ title }}</a>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  altTitle: {
    type: String,
    required: false,
  },
  target: {
    type: String,
    required: false,
    default: "",
  }
});

const classes = "text-blue-600 underline dark:text-blue-500 hover:no-underline";
</script>
