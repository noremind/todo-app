<template>
  <div class="loading">
    <div class="loading__task">
      <div class="loading__title"></div>
      <div class="loading__icons">
        <div class="loading__icon"></div>
        <div class="loading__icon"></div>
        <div class="loading__icon"></div>
      </div>
    </div>
    <div class="loading__desc"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$gray-color: #e6dddd;
.loading {
  background-color: #fff;
  min-height: 100px;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;

  &__task {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    width: 40%;
    height: 36px;
    background-color: $gray-color;
    border-radius: 8px;
  }

  &__icons {
    display: flex;
    gap: 12px;
  }

  &__icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: $gray-color;
  }

  &__desc {
    width: 80%;
    height: 30px;
    background-color: $gray-color;
    border-radius: 12px;
  }
}
</style>
