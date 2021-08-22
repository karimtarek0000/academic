<template>
  <transition v-if="statusToggler" name="slide-right">
    <aside
      class="
        navbar-menu
        global-style-sidebar
        position-fixed
        bg-whiteDark
        padding-x-10
        vh-100
        width-220
      "
    >
      <!--  -->
      <div
        role="select-register"
        class="d-flex flex-column align-items-center margin-y-10"
      >
        <BtnPrimary
          class="
            btn-Voodoo
            width-148
            height-55
            text-14 text-light
            margin-bottom-5
          "
          title="حساب جديد"
          to="sign-up"
        />
        <BtnPrimary
          class="width-148 height-55 btn-Voodoo-outline text-14 text-Voodoo"
          title="تسجيل الدخول"
          to="sign-in"
        />
      </div>
      <!--  -->
      <div
        role="category"
        class="
          sections__info
          d-flex
          align-items-center
          cursor-pointer
          border-botton-Voodoo
          padding-y-10
          margin-bottom-10
        "
      >
        <GSvg
          name-icon="category"
          class="svg-20 margin-end-5 flex-shrink-0"
          title="الأقسام"
        />
        <span class="text-13">الأقسام</span>
      </div>
      <!-- Render category -->
      <ul class="list-unstyled" role="category">
        <li
          v-for="(item, index) in getItems"
          :key="item.title"
          class="padding-y-5"
          @click.stop="getIndex(index)"
        >
          <!--  -->
          <figure
            class="
              sections__items__action
              d-flex
              align-items-center
              justify-content-between
              cursor-pointer
            "
          >
            <span class="text-12" v-text="item.title" />
            <GSvg class="svg-20" name-icon="angle-left" title="افتح" />
          </figure>
        </li>
      </ul>
      <!-- Render sub category -->
      <transition name="slide-right">
        <div
          v-if="toggleSubCategory"
          class="navbar-menu__sub position-absolute bg-whiteDark padding-x-10"
          role="sub-category"
        >
          <div
            class="
              sections__info
              d-flex
              align-items-center
              justify-content-end
              cursor-pointer
              padding-y-10
              margin-bottom-10
            "
            @click.stop="closeSubCategory"
          >
            <span class="text-14 margin-end-5">رجوع</span>
            <GSvg class="svg-20" name-icon="angle-left" title="افتح" />
          </div>
          <!--  -->
          <div
            class="
              sections__info
              d-flex
              align-items-center
              cursor-pointer
              border-botton-Voodoo
              padding-y-10
              margin-bottom-10
            "
          >
            <GSvg
              name-icon="paint-roller"
              class="svg-20 margin-end-5 flex-shrink-0"
              :title="subCategory.title"
            />
            <span class="text-13" v-text="subCategory.title" />
          </div>
          <!--  -->
          <ul class="list-unstyled">
            <li
              v-for="sub in subCategory.subCategory.items"
              :key="sub.title"
              class="padding-y-5"
            >
              <nuxt-link
                class="text-14 text-dark weight-br-300 btn-link"
                :to="{ name: sub.path }"
                >{{ sub.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </transition>
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'SideBarMenu',
  data() {
    return {
      subCategory: null,
      toggleSubCategory: false,
    }
  },
  computed: {
    getItems() {
      return this.$store.state.sections_items
    },
    statusToggler() {
      return this.$store.state.statusToggler
    },
  },
  watch: {
    statusToggler(v) {
      if (!v) this.toggleSubCategory = false
    },
  },
  methods: {
    getIndex(index) {
      this.subCategory = this.getItems[index]
      this.toggleSubCategory = true
    },
    closeSubCategory() {
      this.toggleSubCategory = false
    },
  },
}
</script>

<style lang="scss">
//
.navbar-menu {
  z-index: 9999;

  //
  &__sub {
    width: 100%;
    height: 100%;
    @include position('lt', $moveR: 0, $moveT: 0);
  }
}
</style>
