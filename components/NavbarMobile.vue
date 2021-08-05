<template>
  <nav>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <Logo class="scale-small" />
      </div>
    </div>
    <div class="row">
      <Toggler
        :status-toggler="statusToggler"
        @toggler="statusToggler = $event"
      />
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
}
</script>

<style lang="scss">
.toggler__toggler__burger {
  span {
    background-color: var(--Voodoo);
  }
}
.scale-small {
  transform: scale(0.7);
}
</style>
