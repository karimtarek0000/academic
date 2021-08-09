<template>
  <!--  -->
  <ul class="list-unstyled margin-top-20" role="user-options">
    <li
      v-for="item in items"
      :key="item.title"
      class="border-top-whiteDark padding-y-10 d-flex"
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
            margin-0
          "
        >
          <div class="d-flex align-items-center">
            <GSvg class="svg-20" :name-icon="item.icon" :title="item.title" />
            <span class="text-12 margin-start-5" v-text="item.title" />
          </div>
          <!-- <GSvg class="svg-20" name-icon="angle-left" title="افتح" /> -->
        </figure>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserOptionsList',
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
}
</script>

<style lang="scss">
@include DetectHover {
  span {
    transition: color 0.3s ease;
    //
    &:hover {
      color: rgba($black, 0.6);
    }
  }
}
</style>
