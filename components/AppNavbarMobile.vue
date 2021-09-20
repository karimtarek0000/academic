<template>
  <nav class="navbar-mobile overflow-hidden">
    <!--  -->
    <div v-if="isAuth" class="row padding-y-10">
      <div class="col d-flex justify-content-center">
        <Logo :small="true" color="text-voodoo" />
      </div>
    </div>
    <!--  -->
    <div
      class="
        row
        justify-content-between
        align-items-center
        padding-y-10 padding-x-10
        margin-bottom-5
      "
    >
      <Logo
        v-if="!isAuth"
        :small="true"
        class="col flex-grow-0"
        color="text-voodoo"
      />
      <!--  -->
      <div v-if="isAuth" class="col flex-grow-0">
        <div class="d-flex align-items-center">
          <UserInfo
            name-user="كريم"
            class="flex-column align-items-center cursor-pointer"
            @clicked="toggle('sideBarUser', true)"
          />
          <UserOptions
            class="margin-x-10"
            v-bind="{
              count: 2,
              icon: 'notification-2-fill',
              iconTitle: 'الاشعارات',
              link: false,
            }"
            @clicked="toggle('sideNotification', true)"
          />
        </div>
      </div>
      <Toggler
        class="col flex-grow-0"
        :status-toggler="statusToggler"
        @toggler="statusToggler = $event"
      />
    </div>
    <!--  -->
    <div class="row">
      <div class="col d-flex justify-content-center padding-x-20">
        <Search style="width: 34.9rem" />
      </div>
    </div>
    <!-- OTHER -->
    <AppSideBarMenu />
    <AppSideBarUser />
    <transition name="slide-right">
      <AppNotification
        v-show="statusNotifi"
        :close="true"
        class="position-fixed global-style-sidebar"
        @close="toggle('sideNotification', false)"
        @deleteAll="deleteAllNotification"
      />
    </transition>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppNavbarMobile',
  data() {
    return {
      statusToggler: false,
    }
  },
  computed: {
    ...mapState({
      statusNotifi: 'statusSideNotification',
      isAuth: 'isAuth',
    }),
  },
  watch: {
    statusToggler(v) {
      this.$store.commit('sideBarMenu', v)
    },
  },
  methods: {
    toggle(nameMutation, status) {
      this.$store.commit(nameMutation, status)
    },
    deleteAllNotification() {},
  },
}
</script>

<style lang="scss">
.navbar-mobile {
  .toggler__toggler__burger {
    span {
      background-color: var(--voodoo);
    }
  }
  .count-notifi {
    @include position('rt', $moveR: '-5px', $moveT: 0);
  }
  .user-options {
    &__item {
      a {
        padding: 1.8rem 2.5rem 1.8rem 0;
      }
      span {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
