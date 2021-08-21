<template>
  <div role="share-to" class="share-social-media position-absolute">
    <ul class="share-social-media__items list-unstyled">
      <li v-for="social in socialMedia" :key="social">
        <ShareNetwork
          :network="social"
          :url="getURL"
          title=""
          description="testing"
          quote="quote"
          hashtags="vuejs,vite"
        >
          <GSvg
            class="svg-37 padding-y-5 fill-light"
            :name-icon="social"
            :title="`مشاركة ${social}`"
          />
        </ShareNetwork>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShareSocialMedia',
  inject: ['socialMedia'],
  computed: {
    getURL() {
      return process.client
        ? `${window.location.origin}${this.$route.path}`
        : ''
    },
  },
}
</script>

<style lang="scss">
.share-social-media {
  @include position('rb', $moveB: '20px', $moveR: 0);
  z-index: 9999;
  //
  &__items {
    & li:nth-of-type(1) {
      background-color: var(--facebook);
    }
    & li:nth-of-type(2) {
      background-color: var(--twitter);
    }
    & li:nth-of-type(3) {
      background-color: var(--linkedin);
    }
    & li:nth-of-type(4) {
      background-color: var(--whatsapp);
    }
  }
}
</style>
