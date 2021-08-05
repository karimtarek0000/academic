<template>
  <transition name="slide-right">
    <div
      v-show="toggle"
      role="navbar-user-options"
      class="
        navbar-user
        bg-black
        position-fixed
        width-220
        bg-white
        padding-top-30
      "
      @click.stop=""
    >
      <InfoUser
        class="flex-column align-items-center"
        render="mobile"
        :status-welcome="false"
        name-user="كريم طارق"
        email="ibtdi.com@gmail.com"
      />
      <!-- Render category -->
      <ul class="list-unstyled padding-x-15 margin-top-20" role="user-options">
        <li
          v-for="item in items"
          :key="item.title"
          class="border-top-whiteDark padding-y-10"
        >
          <nuxt-link :to="{ name: item.path }" class="text-black text-12">
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
              <div class="d-flex align-items-center">
                <GSvg
                  class="svg-20"
                  :name-icon="item.icon"
                  :title="item.title"
                />
                <span class="text-12 margin-start-5" v-text="item.title" />
              </div>
              <!-- <GSvg class="svg-20" name-icon="angle-left" title="افتح" /> -->
            </figure>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NavbarUser',
  data() {
    return {
      items: [
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
  computed: {
    toggle() {
      return this.$store.state.statusToggleNavbarUser
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      this.$store.commit('toggleNavbarUser', false)
    })
  },
}
</script>

<style lang="scss">
.navbar-user {
  height: 100vh;
  @include position('lt', $moveR: 0, $moveT: 0);
  box-shadow: -3px 0px 15px darken($whiteDark, 10%);
}
</style>
