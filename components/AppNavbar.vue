<template>
  <nav class="navbar shadow__user-options-list-1">
    <!-- First row -->
    <div
      class="
        row
        g-0
        flex-nowrap
        navbar__wrapper
        custom-container
        padding-bottom-10 padding-top-20
      "
    >
      <!-- First col -->
      <div
        class="
          col
          flex-grow-1
          align-items-center
          position-relative
          margin-end-auto
          padding-x-0
        "
      >
        <div class="row flex-nowrap margin-0 width-100 align-items-center">
          <!-- 1) - Logo -->
          <Logo
            class="col-3 col-xl-3 padding-x-0 text-dark resetHoverLink"
            color="text-voodoo"
          />
          <!-- 2) - Sections -->
          <Sections class="col-2 col-xl-1" />
          <!-- 3) - Search -->
          <div class="col margin-start-auto padding-x-5 padding-0 col-xl-7">
            <Search />
          </div>
        </div>
      </div>
      <!-- Sperated -->
      <span
        class="bg-whiteDark padding-0 margin-top-5 margin-x-10"
        style="height: 4rem; width: 2px"
      ></span>
      <!-- Second col -->
      <div
        class="
          col-xl-5
          fit-content
          d-flex
          justify-content-xl-end
          padding-start-10
        "
      >
        <!-- If user login -->
        <template v-if="isAuth">
          <div class="row flex-nowrap">
            <!--  -->
            <div class="col d-flex padding-0 position-relative">
              <UserInfo
                name-user="أحمد"
                class="flex-column align-items-center cursor-pointer"
                @clicked="togglerUserOptions"
              />
              <GSvg
                class="svg-22 margin-x-5 margin-top-15"
                name-icon="arrow_drop_down_line__1"
                title="open"
              />
              <!--  -->
              <div
                v-show="statusToggleUserOptions"
                style="width: 26.7rem"
                class="
                  user-options
                  shadow__user-options-list-1
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
                  name-user="أحمد حمدان"
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
              <UserOptions
                style="width: 11.6rem"
                path="index"
                text="دوراتي"
                icon="book-3-fill"
                icon-title="دوراتي"
                class="text-12"
              />
            </div>
            <!--  -->
            <div class="col">
              <UserOptions
                path="index"
                icon="heart-fill"
                icon-title="المفضلة"
              />
            </div>
            <!--  -->
            <div class="col">
              <UserOptions
                path="index"
                :count="2"
                icon="shopping-basket-2-fill"
                icon-title="السلة"
              />
            </div>
            <!--  -->
            <div class="col position-relative">
              <UserOptions
                v-bind="{
                  count: 1,
                  icon: 'notification-2-fill',
                  iconTitle: 'الاشعارات',
                  link: false,
                }"
                @clicked="toggleNotifi"
              />
              <!--  -->
              <AppNotification
                v-show="statusToggleNotifi"
                style="min-width: 35.7rem"
                class="position-absolute radius-21 shadow__user-options-list-1"
                @close="toggleNotifi"
              />
            </div>
          </div>
        </template>
        <!-- If user log out -->
        <template v-else>
          <AppBtnGo
            style="width: 14.8rem; height: 5.5rem"
            class="btn-voodoo margin-end-20 text-14 text-light"
            to="auth-sign-up"
          >
            حساب جديد
          </AppBtnGo>
          <AppBtnGo
            style="width: 14.8rem; height: 5.5rem"
            class="btn-voodoo-outline text-14 text-voodoo bg-light"
            to="auth-sign-in"
          >
            تسجيل الدخول
          </AppBtnGo>
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
      statusToggleUserOptions: false,
      statusToggleNotifi: false,
      userOptionsitems: [
        {
          title: 'دوراتي',
          path: 'my-courses',
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
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      if (this.statusToggleUserOptions) this.statusToggleUserOptions = false
      if (this.statusToggleNotifi) this.statusToggleNotifi = false
    })
  },
  methods: {
    togglerUserOptions() {
      this.statusToggleUserOptions = !this.statusToggleUserOptions
    },
    toggleNotifi() {
      this.statusToggleNotifi = !this.statusToggleNotifi
    },
  },
}
</script>

<style lang="scss">
.navbar {
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
  .notification {
    @include position('rt', $moveT: '80%', $moveR: 0);
  }
}
</style>
