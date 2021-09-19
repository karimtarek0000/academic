<template>
  <transition name="slide-right">
    <aside
      v-show="statusToggler"
      style="width: 22rem; height: 100vh"
      role="navbar-user-options"
      class="
        navbar-user
        global-style-sidebar
        bg-black
        position-fixed
        bg-light
        padding-top-30
      "
    >
      <UserInfo
        class="flex-column align-items-center"
        render="mobile"
        :status-welcome="false"
        name-user="كريم طارق"
        email="ibtdi.com@gmail.com"
      />
      <!-- Render category -->
      <UserOptionsList :add-items="userOptionsitems" class="padding-x-10" />
      <!--  -->
      <logOutButton class="border-top-whiteDark padding-y-10" />
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'AppSideBarUser',
  data() {
    return {
      userOptionsitems: [
        {
          title: 'دوراتي',
          path: 'my-courses',
          icon: 'book-3-fill',
        },
        {
          title: 'المفضلة',
          path: 'index',
          icon: 'heart-fill',
        },
        {
          title: 'طلبات الشراء',
          path: 'index',
          icon: 'shopping-basket-2-fill',
        },
        {
          title: 'انضم الينا كمدرب',
          path: 'join-us-instructor',
          icon: 'team-fill-1',
        },
        {
          title: 'الحساب البنكي',
          path: 'index',
          icon: 'bank',
        },
      ],
    }
  },
  computed: {
    statusToggler() {
      return this.$store.state.statusSideBarUser
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      this.$store.commit('sideBarUser', false)
    })
  },
}
</script>

<style lang="scss">
.navbar-user {
  height: 100vh;
  z-index: 10000;
}
</style>
