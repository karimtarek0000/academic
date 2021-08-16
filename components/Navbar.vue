<template>
  <nav class="navbar">
    <!-- First row -->
    <div class="row navbar__wrapper padding-y-25">
      <!-- First col -->
      <div
        :class="[
          'col align-items-center pseudo position-relative ml-auto',
          { 'col-lg-8': !userLogIn, 'col-xl-7': userLogIn },
        ]"
      >
        <div class="row flex-nowrap width-100 align-items-center">
          <!-- 1) - Logo -->
          <Logo
            class="col-3 col-xl-3 padding-x-0 text-dark resetHoverLink"
            color="text-Voodoo"
          />
          <!-- 2) - Sections -->
          <Sections class="col-2 col-xl-1 padding-x-0" />
          <!-- 3) - Search-1 -->
          <div
            :class="[
              'col padding-x-0 mr-auto',
              { 'col-xl-6': !userLogIn, 'col-xl-7': userLogIn },
            ]"
          >
            <Search />
          </div>
        </div>
      </div>
      <!-- Second col -->
      <div
        :class="[
          'col  d-flex justify-content-xl-end',
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
              text-14 text-light
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
            <div class="col d-flex padding-0 position-relative">
              <UserInfo
                name-user="كريم"
                class="flex-column align-items-center cursor-pointer"
                @click.stop="togglerUserOptions"
              />
              <GSvg
                class="svg-22 margin-x-5 margin-top-15"
                name-icon="arrow_drop_down_line__1"
                title="open"
              />
              <!--  -->
              <div
                v-show="toggleUserOptions"
                class="
                  user-options
                  position-absolute
                  width-267
                  bg-light
                  radius-25
                  padding-x-20 padding-y-10
                "
              >
                <!--  -->
                <UserInfo
                  class=""
                  render="mobile"
                  :status-welcome="false"
                  name-user="كريم طارق"
                  email="ibtdi.com@gmail.com"
                />
                <!--  -->
                <UserOptionsList />
                <!--  -->
                <logOutButton class="border-top-whiteDark padding-y-10" />
              </div>
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
      toggleUserOptions: false,
    }
  },
  mounted() {
    document.addEventListener('click', () => (this.toggleUserOptions = false))
  },
  methods: {
    togglerUserOptions() {
      this.toggleUserOptions = !this.toggleUserOptions
    },
  },
}
</script>

<style lang="scss">
//
.navbar {
  box-shadow: 0px 3px 25px #aeaeae1f;
  //
  @media only screen and (max-width: 1350px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  @media only screen and (min-width: 1350px) {
    padding-right: 150px;
    padding-left: 150px;
  }

  //
  .pseudo::after {
    content: '';
    position: absolute;
    height: 50%;
    width: 2px;
    background-color: $whiteDark;
    display: block;
    @include position('rt', $moveR: '-2%', $moveT: '50%');

    //
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }

  //
  .user-options {
    @include position('lt', $moveL: 0, $moveT: '100%');
    z-index: 9999;
    box-shadow: 0px 3px 25px #aeaeae1f;

    .user {
      align-items: center;
      //
      &__image {
        width: 43px;
        height: 39px;
        margin: 0;
      }
      //
      &__info {
        align-items: flex-start !important;
        margin: 0 10px;
      }
    }
  }
}
</style>
