<template>
  <section
    role="user-task"
    style="min-height: 20rem"
    class="row g-0 flex-column align-items-center"
  >
    <GSvg class="svg-90" name-icon="Verification" title="" />
    <AppBtn
      role="send-task"
      style="width: 17.4rem; height: 5rem"
      class="
        btn btn-voodoo
        radius-14
        bg-voodoo
        text-light text-14
        margin-top-30
      "
      @clicked="$emit('openCreateTask', true)"
    >
      ارسال مهمة
    </AppBtn>
  </section>
</template>

<script>
export default {
  name: 'UserTask',
}
</script>

<style></style>
