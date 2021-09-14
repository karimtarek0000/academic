<template>
  <section
    role="user-meeting"
    style="min-height: 20rem"
    class="row g-0 flex-column align-items-center"
  >
    <GSvg class="svg-90" name-icon="date" title="" />
    <AppBtn
      role="user-meeting"
      style="width: 17.4rem; height: 5rem"
      class="
        btn btn-voodoo
        radius-14
        bg-voodoo
        text-light text-14
        margin-top-30
      "
      @clicked="$emit('openCreateMeeting', true)"
    >
      تحديد موعد
    </AppBtn>
  </section>
</template>

<script>
export default {
  name: 'UserMeeting',
}
</script>

<style></style>
