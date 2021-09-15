<template>
  <main
    role="register"
    class="register custom-input--object-3 custom-input--object-4"
  >
    <div class="row overflow-hidden" style="max-height: 100vh">
      <div class="col-6">
        <div class="row g-0 col-lg-9 margin-x-auto">
          <div
            class="
              col-12
              d-flex
              justify-content-start
              margin-bottom-20
              padding-y-20
            "
          >
            <Logo class="register__logo" color="text-voodoo" />
          </div>
          <div class="col">
            <nuxt />
          </div>
        </div>
      </div>
      <!--  -->
      <div
        class="col-6 position-relative register__image padding-0"
        style="min-height: 100vh"
      >
        <img
          class="resize-img position-absolute"
          :src="require(`~/assets/images/register/${$route.meta.image}.jpg`)"
          alt="register"
        />
        <div class="row height-100 align-items-center text-light padding-x-30">
          <div v-if="isSignUp">
            <h2 class="text-16">أكاديمي تعلم أينما كنت</h2>
            <h1 class="text-25">في أي وقت وفي أي مكان</h1>
            <p class="text-12 weight-br-300 col col-lg-7">
              موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في
              الوطن العربي مع التمتع بمميزات عديدة في أكاديمي
            </p>
          </div>
          <!--  -->
          <div v-if="isSignIn">
            <h1 class="text-25">سارع بالتسجيل</h1>
            <p class="text-12 weight-br-300 col col-lg-7">
              موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في
              الوطن العربي مع التمتع بمميزات عديدة في أكاديمي
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    isSignUp() {
      return this.$route.meta.name === 'SignUp'
    },
    isSignIn() {
      return this.$route.meta.name === 'SignIn'
    },
  },
}
</script>

<style lang="scss">
.register {
  &__image {
    img {
      width: 100%;
      height: 100%;
      z-index: -1;
      object-position: left;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba($voodoo, 0),
        rgba($voodoo, 0.8)
      );
      z-index: -1;
    }
  }
  &__logo {
    transform: scale(0.8);
  }
}
</style>
