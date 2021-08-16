<template>
  <div>
    <!-- Navbar -->
    <Navbar v-if="$mq === 'desktop'" class="d-none d-lg-block" />
    <!-- Navbar mobile -->
    <NavbarMobile v-else class="d-block d-lg-none" />
    <!-- Pages -->
    <div class="container-lg">
      <!--  -->
      <Nuxt />
      <!--  -->
      <Footer />
    </div>
    <!--  -->
    <SideBarMenu />
    <!--  -->
    <SideBarUser />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
