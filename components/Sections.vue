<template>
  <div class="sections position-relative">
    <!--  -->
    <div class="sections__info d-flex align-items-center cursor-pointer">
      <GSvg
        name-icon="category"
        class="svg-20 margin-end-5 flex-shrink-0"
        title="الأقسام"
      />
      <span class="text-13">الأقسام</span>
    </div>
    <!--  -->
    <div
      class="
        sections__category
        position-absolute
        shadow-wrapper
        radius-25
        bg-white
        padding-start-20 padding-end-30 padding-top-15 padding-bottom-20
      "
    >
      <!--  -->
      <div
        v-for="item in sections_items"
        :key="item.title"
        class="sections__items"
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
        <!--  -->
        <div
          class="
            sections__details
            shadow-wrapper
            bg-white
            padding-x-10
            position-absolute
          "
        >
          <!--  -->
          <p class="border-botton padding-y-10">
            <GSvg class="svg-20" name-icon="paint-roller" />
            <span class="text-14 margin-start-10" v-text="item.title" />
          </p>
          <!--  -->
          <ul class="list-unstyled">
            <li
              v-for="subName in item.subCategory.items"
              :key="subName"
              class="padding-y-5"
            >
              <nuxt-link
                class="text-14 text-black weight-br-300 btn-link"
                :to="{ name: item.subCategory.path }"
                >{{ subName }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sections',
  data() {
    return {
      sections_items: [
        {
          title: 'التصميم',
          subCategory: {
            path: 'index',
            items: [
              'ويب ديزاين',
              'تصميم تجربة المستخدم',
              'جرافيك ديزابن',
              'موشن جرافيك',
            ],
          },
        },
        {
          title: 'البرمجة',
          subCategory: {
            path: 'index',
            items: [
              'ويب ديزاين',
              'تصميم تجربة المستخدم',
              'جرافيك ديزابن',
              'موشن جرافيك',
            ],
          },
        },
        {
          title: 'الميديا',
          subCategory: {
            path: 'index',
            items: [
              'ويب ديزاين',
              'تصميم تجربة المستخدم',
              'جرافيك ديزابن',
              'موشن جرافيك',
            ],
          },
        },
        {
          title: 'التسويق',
          subCategory: {
            path: 'index',
            items: [
              'ويب ديزاين',
              'تصميم تجربة المستخدم',
              'جرافيك ديزابن',
              'موشن جرافيك',
            ],
          },
        },
        {
          title: 'التصوير',
          subCategory: {
            path: 'index',
            items: [
              'ويب ديزاين',
              'تصميم تجربة المستخدم',
              'جرافيك ديزابن',
              'موشن جرافيك',
            ],
          },
        },
        {
          title: 'إدارة الأعمال',
          subCategory: {
            path: 'index',
            items: [
              'ويب ديزاين',
              'تصميم تجربة المستخدم',
              'جرافيك ديزابن',
              'موشن جرافيك',
            ],
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scopped>
//
.shadow-wrapper {
  box-shadow: 0px 3px 25px #aeaeae1f;
}

//
.sections {
  $width: 285px;
  //
  &__category {
    width: $width;
    @include position('top', $moveT: '260%');
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s 0.2s cubic-bezier(0.05, 0.65, 0.14, 0.86);
    z-index: 9999;
  }
  //
  &__items__action {
    transition: all 0.3s ease;
  }
  //
  &__details {
    width: $width;
    @include position('rt', $moveR: '-92%', $moveT: 0);
    height: 100%;
    border-radius: 2.5rem 0 0 2.5rem;
    border-right: 2px solid var(--whiteDark);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
  }
  //
  .border-botton {
    border-bottom: 2px solid var(--whiteDark);
  }
  //
  .btn-link {
    transition: color 0.2s ease;
    //
    &:hover {
      color: rgba($black, 0.6);
    }
  }
  // Hover
  &__items:hover &__details {
    opacity: 1;
    visibility: visible;
  }
  //
  &__items:hover &__items__action {
    color: var(--coral);
  }
  //
  &__items:hover &__items__action svg {
    fill: var(--coral);
  }
  //
  &:hover &__category {
    opacity: 1;
    visibility: visible;
    @include position('top', $moveT: '220%');
  }
}
</style>
