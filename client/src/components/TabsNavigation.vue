<template>
  <div class="tabs">
    <p v-if="!tabs" class="tabs__loading">Please wait tabs loading...</p>
    <ul v-else class="tabs__list">
      <li
        class="tabs__list-item"
        :class="tab.selected ? 'selected' : ' '"
        v-for="tab in props.tabs"
        :key="tab.id"
        @click="switchTabs"
      >
        <a href="#">{{ tab.title }}</a>
        <i v-show="tab.selected" class="taskCount">{{ tasksLength }}</i>
      </li>
    </ul>
  </div>
</template>

<script setup>
const emit = defineEmits(['switchTabs'])

const props = defineProps({
  tabs: Array,
  tasksLength: {
    type: Number,
    default: 0
  }
})

function switchTabs(e) {
  emit('switchTabs', e)
}
</script>

<style lang="scss" scoped>
.tabs {
  padding: 8px;
  color: black;
  border-radius: 16px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;

  &__list {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list-item {
    display: block;
    position: relative;
  }

  &__loading {
    color: black;
  }
}

.selected {
  background-color: rgba(106, 207, 176, 0.449);
  padding: 3px 6px;
  border-radius: 8px;
  // transition: 0.4s;

  &::after {
    content: '';
    display: block;
    border: 3px solid rgb(101, 177, 126);
    border-radius: 4px;
  }
}

.taskCount {
  position: absolute;
  top: 0;
  right: 5px;
  font-style: normal;
  font-size: 12px;
}
</style>
