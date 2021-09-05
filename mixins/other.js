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
