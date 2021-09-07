<template>
  <!--  -->
  <ul class="user-options list-unstyled" role="user-options">
    <li
      v-for="item in addItems"
      :key="item.title"
      class="user-options__item d-flex align-items-center"
    >
      <nuxt-link :to="{ name: item.path }" class="width-100">
        <!--  -->
        <figure
          class="
            user-options__item-action
            d-flex
            align-items-center
            justify-content-between
            cursor-pointer
            margin-0
          "
        >
          <div class="d-flex align-items-center width-100">
            <GSvg class="svg-20" :name-icon="item.icon" :title="item.title" />
            <span class="margin-start-10" v-text="item.title" />
            <GSvg
              class="svg-17 m-s-auto margin-end-10"
              name-icon="angle-left"
            />
          </div>
        </figure>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserOptionsList',
  props: {
    addItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
