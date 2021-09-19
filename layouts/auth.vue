<template>
  <main
    role="register"
    class="register custom-input--object-3 custom-input--object-4"
  >
    <div class="row overflow-hidden">
      <!-- Col 1 -->
      <div
        class="col-12 col-md-6 change-scrollbar-y order-1 order-md-0"
        style="max-height: 100vh; overflow-y: auto"
      >
        <div
          class="row g-0 col-lg-9 margin-x-auto md-padding-y-20 lg-padding-x-20"
        >
          <div
            v-if="ifNotTabletP"
            class="
              col-12
              d-flex
              justify-content-start
              margin-bottom-20
              padding-y-20
            "
          >
            <Logo
              style="margin-right: -1rem"
              class="scale-small"
              color="text-voodoo"
            />
          </div>
          <div class="col">
            <transition name="slide-right" mode="out-in">
              <nuxt />
            </transition>
          </div>
        </div>
      </div>
      <!-- Col 2 -->
      <div
        class="
          col-12 col-md-6
          position-relative
          register__image
          padding-0
          order-0 order-md-1
          overflow-hidden
        "
      >
        <img
          class="resize-img position-absolute"
          :src="require(`~/assets/images/register/${$route.meta.image}.jpg`)"
          alt="register"
        />
        <!--  -->
        <div
          class="
            row
            col-11 col-lg-9
            margin-x-auto
            align-items-center
            margin-top-5
            overflow-hidden
          "
        >
          <!--  -->
          <div v-if="!ifNotTabletP" class="col flex-grow-0">
            <Logo
              style="margin-right: -1rem"
              class="register__logo"
              color="text-light"
            />
          </div>
          <!--  -->
          <div
            class="
              col
              flex-grow-0
              margin-start-auto
              d-flex
              flex-shring-0
              align-items-center
            "
          >
            <AppBtnGo
              v-if="!isSignUp"
              style="width: 14.8rem; height: 5.5rem"
              class="btn-light flex-shring-0 text-14 margin-x-5 text-voodoo"
              to="auth-sign-up"
            >
              حساب جديد
            </AppBtnGo>
            <!--  -->
            <AppBtnGo
              v-if="!isSignIn"
              style="width: 14.8rem; height: 5.5rem"
              class="
                btn-voodoo
                flex-shring-0
                btn-light-outline
                margin-x-5
                text-14 text-light
              "
              to="auth-sign-in"
            >
              تسجيل الدخول
            </AppBtnGo>
          </div>
        </div>
        <!--  -->
        <div class="row height-100 align-items-center text-light padding-x-45">
          <transition-group name="slide-up" mode="in-out" appear>
            <div v-if="isSignUp" key="1">
              <h2 class="text-16">أكاديمي تعلم أينما كنت</h2>
              <h1 class="text-25">في أي وقت وفي أي مكان</h1>
              <p class="text-12 weight-br-300 col col-lg-7">
                موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في
                الوطن العربي مع التمتع بمميزات عديدة في أكاديمي
              </p>
            </div>
            <!--  -->
            <div v-if="!isSignUp" key="2">
              <h1 class="text-25">سارع بالتسجيل</h1>
              <p class="text-12 weight-br-300 col col-lg-7">
                موقعنا لجميع المجالات نقدم لكم دورات لباقة من أفضل المدربين في
                الوطن العربي مع التمتع بمميزات عديدة في أكاديمي
              </p>
            </div>
          </transition-group>
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
    ifNotTabletP() {
      return this.$mq !== 'tabletP'
    },
  },
}
</script>

<style lang="scss">
.register {
  &__image {
    min-height: 100vh;
    @media only screen and (max-width: 48em) {
      min-height: 40vh;
    }
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
}
</style>
