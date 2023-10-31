<template>
    <p aria-live="assertive" class="errorMessage" :id="id">
      <slot />
    </p>
  </template>
  
  <script setup lang="ts">
  defineProps({
    id: { type: String, required: true }
  })
  </script>
  
  <style>
  body {
    background-color: #313131;
  }
  </style>