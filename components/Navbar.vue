<template>
  <nav class="padding-y-27 navbar align-items-center height-109">
    <!-- First row -->
    <div class="row align-items-center">
      <!-- First col -->
      <div class="col col-lg-8 col-xl-8 pseudo position-relative ml-auto">
        <div class="row align-items-center">
          <!-- 1) - Logo -->
          <Logo class="col-3 text-black resetHoverLink" />
          <!-- 2) - Sections -->
          <Sections class="col-1" />
          <!-- 3) - Search -->
          <div class="col margin-end-30 mr-auto">
            <Search class="mr-auto" />
          </div>
        </div>
      </div>
      <!-- Second col -->
      <div class="col col-lg-4 col-xl-4 d-flex">
        <BtnPrimary
          class="btn-Voodoo width-148 height-55 margin-x-20 text-14 text-white"
          title="حساب جديد"
          to="sign-up"
        />
        <BtnPrimary
          class="width-148 height-55 btn-Voodoo-outline text-14 text-Voodoo"
          title="تسجيل الدخول"
          to="sign-in"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
//
.navbar {
  @media only screen and (min-width: 1350px) {
    padding-right: 90px;
    padding-left: 90px;
  }

  //
  &__search {
    //
    &-icon {
      @include position('rt', $moveR: '20px', $moveT: '50%');
    }
  }

  //
  .pseudo::after {
    content: '';
    position: absolute;
    height: 50%;
    width: 2px;
    background-color: $whiteDark;
    display: block;
    margin: 0 10px;
    @include position('rt', $moveR: '-0.6rem', $moveT: '50%');
  }
}
</style>
