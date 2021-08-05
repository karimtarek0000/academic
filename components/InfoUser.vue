<template>
  <!--  -->
  <div v-if="render === 'mobile'" class="d-flex">
    <!--  -->
    <figure class="width-61 height-55 radius-21" v-on="$listeners">
      <img
        role="image-user"
        class="img-fluid"
        src="~/assets/images/global/avatar.png"
        alt="avatar"
      />
    </figure>
    <!--  -->
    <div
      role="info-user"
      class="text-12 text-black d-flex flex-column align-items-center"
    >
      <div>
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
  name: 'InfoUser',
  props: {
    render: {
      type: String,
      default: 'desktop',
    },
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
}
</script>

<style></style>
