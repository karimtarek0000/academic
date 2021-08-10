<template>
  <div>
    <!-- Navbar -->
    <Navbar v-if="$mq === 'desktop'" class="d-none d-lg-block" />
    <!-- Navbar mobile -->
    <NavbarMobile v-else />
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
export default {}
</script>

<style></style>
