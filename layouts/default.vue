<template>
  <div>
    <!-- Navbar -->
    <Navbar v-if="ifDesktop" class="d-none d-lg-block" />
    <!-- Navbar mobile -->
    <NavbarMobile v-else class="d-block d-lg-none" />
    <!-- Pages -->
    <div class="container-xxl">
      <!--  -->
      <Nuxt />
      <!--  -->
      <Footer />
    </div>
    <!--  -->
    <template v-if="ifTablet">
      <SideBarMenu />
      <!--  -->
      <SideBarUser />
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

<style></style>
