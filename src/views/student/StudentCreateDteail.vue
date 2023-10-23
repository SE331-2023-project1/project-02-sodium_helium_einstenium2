<script setup lang="ts">
import { useStudentStore } from '@/stores/student'
import { computed } from 'vue'
import router from '@/router'
import StudentDetailView from './StudentDetailView.vue';
const advisorStore = useStudentStore()
const StudentID = Number(router.currentRoute.value.params.id)
const createStudent = computed(() => advisorStore.getStudentDataById(StudentID))
</script>

<template>
  <div class="Student-created-detail mt-5">
    <div v-for="Student in createStudent" :key="Student.id">
      <div class="image-container">
        <img class="image" :src="Student.image" />
      </div>
      <div class="advisor-info mt-5">
        <p>Name: {{ Student.name }}</p>
        <p>Surname: {{ Student.surname }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.image {
  width: 300px;
  height: 200px;
}

.advisor-created-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>