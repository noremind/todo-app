<template>
  <div class="portrait">
    <Tabs :tabs="tabs" :tasks-length="tasksLength.value" @switch-tabs="switchTabs"></Tabs>
    <div v-if="tasksLength == 0">
      <h1>You don't have a task</h1>
    </div>
    <div v-if="tasks" class="tasks-margin">
      <TodoTasks
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        @complete-task="completeTask(task.id)"
        @delete-task="deleteTask(index)"
      />
    </div>
    <div v-else>
      <LoadingTasks v-for="n in 5" :key="n"></LoadingTasks>
    </div>
    <NewTask :tasks-length="tasksLength.value" :requestData="requestData"></NewTask>
  </div>
</template>

<script setup>
import LoadingTasks from './components/LoadingTasks.vue'
import Tabs from './components/TabsNavigation.vue'
import TodoTasks from './components/TodoTasks.vue'
import NewTask from './components/NewTask.vue'

import { ref, computed, watch, onMounted } from 'vue'

const tabs = ref(null)
const tasks = ref(null)

setTimeout(() => {
  tabs.value = [
    { id: 1, title: 'All', selected: true },
    { id: 2, title: 'Completed', selected: false },
    { id: 3, title: 'Uncompleted', selected: false }
  ]
}, 500)

function switchTabs(e) {
  tabs.value.map((elem) => (elem.selected = elem.title === e.target.innerHTML))
}

function completeTask(id) {
  tasks.value.forEach((elem) => {
    if (id === elem.id) elem.isCompleted = true
  })
}

function deleteTask(index) {
  tasks.value.splice(index, 1)
}

const tasksLength = ref(0)

watch(tasks, () => {
  tasksLength.value = computed(() => {
    return tasks.value && tasks.value.length > 0 ? tasks.value.length : 0
  })
})

// const TodosFromDataBase = ref(null)

onMounted(async () => {
  await requestData()
})

async function requestData() {
  await fetch('http://localhost:5000/api/todos')
    .then((response) => response.json())
    .then((json) => (tasks.value = json))
    .then((data) => console.log(data))
}
</script>

<style lang="scss" scoped>
.portrait {
  border: 3.2px solid darkcyan;
  background-color: #f5f5dd;
  border-radius: 16px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  -webkit-box-shadow: 0px 0px 27px 15px rgba(225, 230, 234, 0.2);
  -moz-box-shadow: 0px 0px 27px 15px rgba(225, 230, 234, 0.2);
  box-shadow: 0px 0px 27px 15px rgba(225, 230, 234, 0.2);
}

.tasks-margin {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
