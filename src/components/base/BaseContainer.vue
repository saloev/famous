<template>
  <div class="base-container">
    <slot />
  </div>
</template>
<style lang="scss">
  .base-container {
    max-width: 1264px;
    padding: 0 $default-block-space;
    margin: 0 auto;
  }
</style>
