<template>
  <h1>Add new task</h1>
  <form method="post" class="new-task">
    <label for="title">Title: </label>
    <input type="text" name="title" v-model="newTask.title" />

    <label for="desc">Description: </label>
    <input type="text" name="desc" v-model="newTask.desc" />

    <button @click.prevent="addNewTask" type="submit">Submit</button>
  </form>
</template>

<script setup>
import { reactive, watch, ref, computed, onUpdated } from 'vue'

const props = defineProps({
  tasksLength: {
    type: Number,
    default: 0
  },
  requestData: Function
})

onUpdated(() => {
  console.log('Updated')
})

const tasksLengthCopy = ref(0)

// class NewTask {
//   constructor(id, title, desc) {
//     this.id = id,
//     this.title = title,
// 		this.desc = desc,
// 		this.isCompleted = false,
//   }
// }

watch(props.tasksLength, () => {
  tasksLengthCopy.value = computed(() => {
    return props.tasksLength && props.tasksLength.value > 0 ? props.tasksLength.value : 0
  })
})

const newTask = reactive({
  id: 6,
  title: '',
  desc: '',
  completed: false
})
async function addNewTask() {
  if (newTask.title.length > 0 && newTask.desc.length > 0) {
    await fetch('http://localhost:5173/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    })
      .then(() => {
        newTask.title = ''
        newTask.desc = ''
      })
      .then(() => {
        props.requestData()
      })
      .catch((err) => console.log(err))
  } else {
    console.log('Fill the inputs')
  }
}
</script>

<style lang="scss" scoped>
.new-task {
  color: black;
}
</style>
