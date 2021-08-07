<template>
  <nav class="navbar padding-y-25 height-115">
    <!-- First row -->
    <div class="row">
      <!-- First col -->
      <div
        :class="[
          'col align-items-center pseudo position-relative ml-auto',
          { 'col-lg-8': !userLogIn, 'col-xl-7': userLogIn },
        ]"
      >
        <div class="row flex-nowrap width-100 align-items-center">
          <!-- 1) - Logo -->
          <Logo class="col text-black resetHoverLink" color="text-Voodoo" />
          <!-- 2) - Sections -->
          <Sections class="col-2" />
          <!-- 3) - Search-1 -->
          <div class="col-7">
            <Search />
          </div>
        </div>
      </div>
      <!-- Second col -->
      <div
        :class="[
          'col  d-flex',
          { 'col-lg-4': !userLogIn, 'col-xl-5': userLogIn },
        ]"
      >
        <!-- If user not login -->
        <template v-if="!userLogIn">
          <BtnPrimary
            class="
              btn-Voodoo
              width-148
              height-55
              margin-end-20
              text-14 text-white
            "
            title="حساب جديد"
            to="sign-up"
          />
          <BtnPrimary
            class="width-148 height-55 btn-Voodoo-outline text-14 text-Voodoo"
            title="تسجيل الدخول"
            to="sign-in"
          />
        </template>
        <!-- If user login -->
        <template v-else>
          <div class="row flex-nowrap">
            <!--  -->
            <div class="col">
              <InfoUser
                name-user="كريم"
                class="flex-column align-items-center"
                @click.stop="s"
              />
            </div>
            <!--  -->
            <div class="col">
              <User-Options
                path="index"
                text="دوراتي"
                icon="book-3-fill"
                icon-title="الاشعارات"
                class="width-116 text-12"
              />
            </div>
            <!--  -->
            <div class="col">
              <User-Options
                path="index"
                icon="heart-fill"
                icon-title="المفضلة"
              />
            </div>
            <!--  -->
            <div class="col">
              <User-Options
                path="index"
                :count="2"
                icon="shopping-basket-2-fill"
                icon-title="السلة"
              />
            </div>
            <!--  -->
            <div class="col">
              <User-Options
                path="index"
                :count="1"
                icon="notification-2-fill"
                icon-title="الاشعارات"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      userLogIn: false,
    }
  },
  methods: {
    s() {
      's'
    },
  },
}
</script>

<style lang="scss">
//
.navbar {
  @media only screen and (min-width: 1350px) {
    padding-right: 50px;
    padding-left: 50px;
  }

  //
  .pseudo::after {
    content: '';
    position: absolute;
    height: 50%;
    width: 2px;
    background-color: $whiteDark;
    display: block;
    margin: 0 15px;
    @include position('rt', $moveR: '-0.6rem', $moveT: '50%');
  }
}
</style>
