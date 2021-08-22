<template>
  <transition name="slide-right">
    <aside
      v-show="toggle"
      role="navbar-user-options"
      class="
        navbar-user
        global-style-sidebar
        bg-black
        position-fixed
        width-220
        bg-light
        padding-top-30
      "
      @click.stop=""
    >
      <UserInfo
        class="flex-column align-items-center"
        render="mobile"
        :status-welcome="false"
        name-user="كريم طارق"
        email="ibtdi.com@gmail.com"
      />
      <!-- Render category -->
      <UserOptionsList class="padding-x-10" />
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'SideBarUser',
  computed: {
    toggle() {
      return this.$store.state.statusToggleNavbarUser
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      this.$store.commit('toggleNavbarUser', false)
    })
  },
}
</script>

<style lang="scss">
.navbar-user {
  height: 100vh;
  z-index: 8888;
}
</style>
