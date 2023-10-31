<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'
defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    required: true
  }
})
const truncate = (text: string) => {
  if (text.length > 8) {
    return text.substring(0, 8) + '...'
  }
  return text
}
</script>

<template>
  <RouterLink :to="{ name: 'student-detail', params: { id: student?.studentId } }">
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-md">
      <span class="absolute text-sm text-white bg-[#1f3edd] rounded-br-lg rounded-tl-lg px-6 py-1.5">{{
        student?.studentId
      }}</span>
      <div class="flex flex-col items-center p-10">
        <img class="w-24 h-24 object-cover mb-3 rounded-full shadow-lg" :src="student?.profileImage" alt="Bonnie image" />
        <div v-if="student">
          <h5 class="mb-1 text-xl font-medium text-orange-900">
            {{ truncate(student?.name) }} {{ truncate(student?.surname) }}
          </h5>
        </div>
        <span class="text-sm text-gray-500">
          <ul>
            <li v-for="course in student?.courseList">- {{ course }}</li>
          </ul>
        </span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#1f3edd] rounded-lg hover:bg-[#4857eb] focus:ring-4 focus:outline-none focus:ring-yellow-300 shadow-lg">Details</a>
          <a href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-red-200">Comment</a>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

