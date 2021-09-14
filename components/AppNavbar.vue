<template>
  <nav class="navbar">
    <!-- First row -->
    <div class="row navbar__wrapper custom-container padding-y-25">
      <!-- First col -->
      <div
        :class="[
          'col align-items-center pseudo position-relative margin-end-auto',
          { 'col-lg-8': !userLogIn, 'col-xl-7': userLogIn },
        ]"
      >
        <div class="row flex-nowrap width-100 align-items-center">
          <!-- 1) - Logo -->
          <Logo
            class="col-3 col-xl-3 padding-x-0 text-dark resetHoverLink"
            color="text-voodoo"
          />
          <!-- 2) - Sections -->
          <Sections class="col-2 col-xl-1" />
          <!-- 3) - Search-1 -->
          <div
            :class="[
              'col margin-start-auto',
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
          <AppBtnGo
            style="width: 14.8rem; height: 5.5rem"
            class="btn-voodoo margin-end-20 text-14 text-light"
            to="sign-up"
          >
            حساب جديد
          </AppBtnGo>
          <AppBtnGo
            style="width: 14.8rem; height: 5.5rem"
            class="btn-voodoo-outline text-14 text-voodoo"
            to="sign-in"
          >
            تسجيل الدخول
          </AppBtnGo>
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
                style="width: 26.7rem"
                class="
                  user-options
                  shadow__user-options-list
                  position-absolute
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
                <UserOptionsList
                  :add-items="userOptionsitems"
                  class="margin-top-20"
                />
                <!--  -->
                <logOutButton class="border-top-whiteDark padding-y-10" />
              </div>
            </div>
            <!--  -->
            <div class="col">
              <User-Options
                style="width: 11.6rem"
                path="index"
                text="دوراتي"
                icon="book-3-fill"
                icon-title="الاشعارات"
                class="text-12"
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
  name: 'AppNavbar',
  data() {
    return {
      userLogIn: false,
      toggleUserOptions: false,
      userOptionsitems: [
        {
          title: 'دوراتي',
          path: 'index',
          icon: 'book-3-fill',
        },
        {
          title: 'المفضلة',
          path: 'index',
          icon: 'heart-fill',
        },
        {
          title: 'السلة',
          path: 'index',
          icon: 'shopping-basket-2-fill',
        },
        {
          title: 'الملف الشخصي',
          path: 'index',
          icon: 'user-fill',
        },
        {
          title: 'انضم الينا كمدرب',
          path: 'index',
          icon: 'team-fill-1',
        },
      ],
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
  .pseudo::after {
    content: '';
    position: absolute;
    height: 50%;
    width: 2px;
    background-color: $whiteDark;
    display: block;
    @include position('rt', $moveR: '-2px', $moveT: '50%');

    //
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }

  //
  .user-options {
    @include position('lt', $moveL: 0, $moveT: '100%');
    z-index: 9999;

    @include DetectHover {
      span {
        transition: color 0.3s ease;
        //
        &:hover {
          color: rgba($dark, 0.6);
        }
      }
    }

    &__item {
      padding: 1rem 0;
      span {
        font-size: 1.2rem;
      }
    }

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
