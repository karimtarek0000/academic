<template>
  <div>
    <!-- Navbar -->
    <Navbar v-if="outerHeight >= 992" />
    <!-- Navbar mobile -->
    <NavbarMobile v-if="outerHeight <= 992" class="d-block d-lg-none" />
    <!-- Pages -->
    <div class="container-lg">
      <!--  -->
      <Nuxt />
      <!--  -->
      <Footer />
    </div>
    <!--  -->
    <NavbarMenu />
    <!--  -->
    <NavbarUser />
  </div>
</template>

<script>
export default {
  data() {
    return {
      outerHeight: null,
    }
  },
  mounted() {
    this.outerHeight = window.outerWidth
  },
}
</script>

<style></style>
