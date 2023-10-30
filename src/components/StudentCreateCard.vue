<!-- <script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { StudentInfo } from '@/info'
import type { PropType } from 'vue'

defineProps({
  createStundent: {
    type: Object as PropType<StudentInfo>,
    required: true
  }
})
</script>
<template>
  <RouterLink
    v-if="createStundent"
    class="student-link"
    :to="{ name: 'advisor-create-detail', params: { id: createStundent.id } }"
  >
    <div class="student-card">
      <div class="text-center mt-24">
        <p>Name: {{ createStundent.name }} {{ createStundent.surname }}</p>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped>
.advisor-card {
  padding: 20px;
  width: 250px;
  height: 250px;
  cursor: pointer;
  border: solid 1px black;
  margin-bottom: 18px;
}

.advisor-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style> -->
