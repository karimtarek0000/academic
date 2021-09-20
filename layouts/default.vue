<template>
  <div class="default">
    <!-- Navbar -->
    <AppNavbar v-if="ifDesktop" class="d-none d-lg-block" />
    <!-- Navbar mobile -->
    <AppNavbarMobile v-else class="d-block d-lg-none" />
    <!--  -->
    <div class="container-xxl">
      <Nuxt />
      <Footer />
    </div>
    <!--  -->
    <BackDrop :toggle="statusToggler" />
  </div>
</template>

<script>
export default {
  computed: {
    ifDesktop() {
      return this.$mq === 'desktop'
    },
    statusToggler() {
      return (
        this.$store.state.statusSideBarMenu ||
        this.$store.state.statusSideBarUser ||
        this.$store.state.statusSideNotification
      )
    },
  },
}
</script>

<style lang="scss">
.default {
  .navbar-mobile {
    .notification {
      width: 50%;
      height: 100vh;
      max-height: 100vh;

      @media only screen and (max-width: 48em) {
        width: 100%;
      }

      &__data {
        max-height: 92vh;
      }
    }
  }
}
</style>
