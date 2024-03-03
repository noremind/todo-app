<template>
  <section class="task-section">
    <div class="tasks" v-if="props.task">
      <h2>{{ props.task.title }}</h2>
      <div class="tasks__edit">
        <button class="tasks__btn">
          <img class="tasks__icon" src="../assets/icons/edit.svg" alt="Edit Todo" />
        </button>
        <button class="tasks__btn" @click="deleteTask">
          <img class="tasks__icon" src="../assets/icons/delete.svg" alt="Delete Todo" />
        </button>
        <button v-if="props.task.isCompleted" class="tasks__btn">
          <img
            class="tasks__icon"
            src="../assets/icons/correct-success-tick.svg"
            alt="Success Todo"
          />
        </button>
        <button v-else class="tasks__btn" @click="completeTask">
          <img
            class="tasks__icon"
            src="../assets/icons/accept-check-success.svg"
            alt="Success Todo"
          />
        </button>
      </div>
    </div>
    <p class="tasks__desc">{{ props.task.desc }}</p>
  </section>
</template>

<script setup>
const props = defineProps({ task: Object })
const emit = defineEmits(['completeTask', 'deleteTask'])

function completeTask(id) {
  emit('completeTask', id)
}
function deleteTask(index) {
  emit('deleteTask', index)
}
</script>

<style lang="scss" scoped>
.task-section {
  // border: 1.5px solid rgb(146, 106, 146);
  border-radius: 8px;
  min-height: 100px;
  padding: 16px;
  color: black;
  position: relative;
  background-color: #ffffff;
  transition: transform 0.6s;
  -webkit-box-shadow: 7px 7px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 7px 7px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 7px 7px 5px -5px rgba(34, 60, 80, 0.6);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 7px;
    height: 100%;
    background-color: rgb(45, 167, 112);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
}
.tasks {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__desc {
    font-size: 14px;
  }

  &__edit {
    display: flex;
    gap: 10px;
  }

  &__icon {
    width: 24px;
  }

  &__btn {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.09);
    }
  }
}
</style>
