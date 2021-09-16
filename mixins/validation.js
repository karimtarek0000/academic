import { helpers, required, minLength } from 'vuelidate/lib/validators'
const numbers = helpers.regex('numbers', /[0-9]/)
const lowerCase = helpers.regex('lowerCase', /[a-z]/)
const upperCase = helpers.regex('upperCase', /[A-Z]/)
const char = helpers.regex('char', /[@#%^*&]/)

export const password = {
  validations: {
    password: {
      required,
      numbers,
      lowerCase,
      upperCase,
      char,
      minLength: minLength(10),
    },
  },
  computed: {
    checkNumbers() {
      return (
        this.$v.form.password.numbers &&
        this.$v.form.password.required &&
        this.$v.form.password.$dirty
      )
    },
    checkLowerCase() {
      return (
        this.$v.form.password.lowerCase &&
        this.$v.form.password.required &&
        this.$v.form.password.$dirty
      )
    },
    checkUpperCase() {
      return (
        this.$v.form.password.upperCase &&
        this.$v.form.password.required &&
        this.$v.form.password.$dirty
      )
    },
    checkCharacters() {
      return (
        this.$v.form.password.char &&
        this.$v.form.password.required &&
        this.$v.form.password.$dirty
      )
    },
  },
}
