<script setup lang="ts">
import StudentCreateForm from '@/components/StudentCreateForm.vue'
import type { StudentInfo } from '@/info'
import { useStudentStore } from '@/stores/student'
import { useMessageStore } from '@/stores/message'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  Student: {
    type: Object as PropType<StudentInfo>,
    require: true
  }
})
const store = useStudentStore()
const messageStore = useMessageStore()
function createStudent(Student: StudentInfo) {
  console.log('Before add advisor' + Student.name)
  store.addStudentData(Student)
  messageStore.updateMessage('you are cookie pudๆ' + props.Student?.name)
  setTimeout(() => {
    messageStore.resetMessage()
  }, 3000)
  router.push({ name: 'advisor-list' })
}
</script>
<template>
  <div class="mt-5">
    <AdvisorCreateForm @create-submitted="createStudent"></AdvisorCreateForm>
  </div>
</template>
