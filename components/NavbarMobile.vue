<template>
  <nav>
    <!--  -->
    <!-- <div class="row padding-y-10">
      <div class="col d-flex justify-content-center">
        <Logo class="scale-small" />
      </div>
    </div> -->
    <!--  -->
    <div
      class="
        row
        justify-content-between
        align-items-center
        padding-y-10
        margin-bottom-5
      "
    >
      <Logo class="col flex-grow-0 scale-small" />
      <!--  -->
      <!-- <div class="col flex-grow-0">
        <div class="d-flex align-items-center">
          <InfoUser
            render="mobile"
            name-user="كريم"
            class="flex-column align-items-center"
            @click.stop="openNavbarUser"
          />
          <User-Options
            :count="2"
            icon="notification-2-fill"
            icon-title="الاشعارات"
          />
        </div>
      </div> -->
      <Toggler
        class="col flex-grow-0"
        :status-toggler="statusToggler"
        @toggler="statusToggler = $event"
      />
    </div>
    <!--  -->
    <div class="row">
      <div class="col d-flex justify-content-center">
        <Search />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMobile',
  data() {
    return {
      statusToggler: false,
    }
  },
  watch: {
    statusToggler(v) {
      this.$store.commit('toggler', v)
    },
  },
  methods: {
    openNavbarUser() {
      this.$store.commit('toggleNavbarUser', true)
    },
  },
}
</script>

<style lang="scss">
.toggler__toggler__burger {
  span {
    background-color: var(--Voodoo);
  }
}
.scale-small {
  transform: scale(0.8);
}

.count-notifi {
  @include position('rt', $moveR: '-5px', $moveT: 0);
}
</style>
