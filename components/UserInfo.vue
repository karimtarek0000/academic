<template>
  <!--  -->
  <div class="user d-flex">
    <!--  -->
    <figure
      style="width: 6.1rem; height: 5.5rem"
      class="user__image radius-21"
      @click.stop="clicked"
    >
      <img
        role="image-user"
        class="img-fluid"
        src="~/assets/images/global/avatar.png"
        alt="avatar"
      />
    </figure>
    <!--  -->
    <div
      role="user-info"
      class="user__info text-12 text-dark d-flex flex-column align-items-center"
    >
      <div class="weight-br-300">
        <span v-if="statusWelcome" role="welcome">أهلا</span>
        <span role="name-user" v-text="nameUser" />
      </div>
      <span
        role="email-user"
        class="text-silver weight-br-300 margin-top-5"
        v-text="email"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    nameUser: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: '',
    },
    statusWelcome: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    },
  },
}
</script>

<style></style>
