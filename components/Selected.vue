<template>
  <div class="selected d-flex align-items-center">
    <input
      :id="id"
      class="selected__input"
      :value="value"
      :type="type"
      :name="name"
      @input="select"
    />
    <label
      class="
        selected__label
        d-flex
        align-items-center
        weight-br-300
        text-14
        margin-start-5
      "
      :for="id"
    >
      <span class="selected__label__icon" />
      <span
        class="selected__label__text text-14 margin-start-10"
        v-text="label"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'Selected',
  props: {
    value: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'radio',
    },
    selected: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    select() {
      if (this.selected === '') return this.$emit('changeSelect', this.value)
      this.$emit('changeSelect', '')
    },
  },
}
</script>

<style lang="scss">
.selected {
  //
  &__label {
    cursor: pointer;
    //
    &__icon {
      position: relative;
      width: 22px;
      height: 22px;
      border: 0.5px solid var(--alto);
      border-radius: 50%;

      //
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        display: none;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: var(--alabaster);
      }
    }
  }

  &__input:checked + &__label > &__label__icon::after {
    // background-color: var(--coral);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18.334' height='18.334' viewBox='0 0 18.334 18.334'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23ff805d;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M11.167,20.333a9.167,9.167,0,1,1,9.167-9.167,9.167,9.167,0,0,1-9.167,9.167Zm-.914-5.5,6.481-6.482-1.3-1.3-5.185,5.186L7.659,9.648l-1.3,1.3Z' transform='translate(-2 -1.999)'/%3E%3C/svg%3E");
    display: block;
  }
}
</style>
