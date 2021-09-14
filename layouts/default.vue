<template>
  <div class="default">
    <!-- Navbar -->
    <AppNavbar v-if="ifDesktop" class="d-none d-lg-block" />
    <!-- Navbar mobile -->
    <AppNavbarMobile v-else class="d-block d-lg-none" />
    <!-- Pages -->
    <div class="container-xxl">
      <!--  -->
      <Nuxt />
      <!--  -->
      <Footer />
    </div>
    <!--  -->
    <template v-if="ifTablet">
      <AppSideBarMenu />
      <AppSideBarUser />
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    ifDesktop() {
      return this.$mq === 'desktop'
    },
    ifTablet() {
      return this.$mq === 'tablet'
    },
  },
}
</script>

<style lang="scss">
.default {
  //
  .user-options {
    &__item {
      a {
        padding: 1.8rem 2.5rem 1.8rem 0;
      }
      span {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
