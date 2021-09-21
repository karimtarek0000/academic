export const setDirectionAnim = {
  data() {
    return {
      numComp: 1,
      dirctionAnimate: '',
    }
  },
  watch: {
    numComp(newValue, oldValue) {
      newValue > oldValue
        ? (this.dirctionAnimate = 'slide-right-dir')
        : (this.dirctionAnimate = 'slide-left-dir')
    },
  },
}

export const focusInput = {
  watch: {
    statusToggleBackDrop(value) {
      this.$nextTick(() => {
        if (value && this.$refs.firstInput) this.$refs.firstInput.focus()
        if (!value) this.$v.$reset()
      })
    },
  },
}
