<template>
  <header class="text-center padding-y-45">
    <h1 class="text-30 text-dark margin-bottom-10">
      <slot name="head" />
    </h1>
    <p class="text-14 text-silver weight-br-300 mx-auto col-lg-4">
      <slot name="desc" />
    </p>
  </header>
</template>

<script>
export default {
  name: 'AppPagesHeader',
}
</script>

<style></style>
