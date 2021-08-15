<template>
  <transition name="slide-right">
    <aside
      v-show="toggle"
      role="navbar-user-options"
      class="
        navbar-user
        bg-black
        position-fixed
        width-220
        bg-white
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
  @include position('lt', $moveR: 0, $moveT: 0);
  box-shadow: -3px 0px 15px darken($whiteDark, 10%);
}
</style>
