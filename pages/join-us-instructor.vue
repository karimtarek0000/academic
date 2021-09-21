<template>
  <main
    role="join-us-as-an-instuctor"
    class="custom-input--object-3 custom-input--object-4 custom-upload-file-1"
  >
    <AppPagesHeader>
      <template slot="head">انضم الينا كمدرب</template>
      <template slot="desc">
        انضم الينا الآن كمدرب اذا كان عندك القدرة على التدريب</template
      >
    </AppPagesHeader>
    <!--  -->
    <section class="bg-alabaster radius-12 padding-y-67">
      <div class="row custom-container justify-content-center">
        <!--  -->
        <div
          class="
            row
            col-md-9
            flex-column
            shadow__user-options-list-2
            bg-light
            padding-y-61 padding-x-20
            radius-21
          "
        >
          <div
            class="col position-relative mx-auto padding-0"
            style="width: 15.3rem"
          >
            <figure
              class="margin-bottom-0 radius-49 overflow-hidden"
              style="height: 14.7rem"
            >
              <img
                ref="userImage"
                class="resize-img"
                src="~/assets/images/global/avatar-placeholder.jpg"
                alt=""
              />
            </figure>
            <AppUploadFile
              v-model="form.image"
              accept="image/*"
              style="width: 5.1rem; height: 4.7rem"
              class="bg-voodoo upload-file position-absolute radius-18"
            >
              <GSvg class="svg-22" name-icon="upload-image" title="ارفع صورة" />
            </AppUploadFile>
          </div>
          <!--  -->
          <div class="col margin-top-40">
            <form>
              <div class="row">
                <div class="col-12 col-sm-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      position-relative
                      margin-bottom-10
                    "
                  >
                    <input
                      v-model.trim="$v.form.firstName.$model"
                      role="first-name"
                      type="text"
                      class="
                        padding-start-30
                        border-whiteDark-all
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="الاسم الاول"
                    />
                    <GSvg
                      :class="[
                        'svg-17 fill-silver position-absolute margin-x-10',
                        { 'fill-dark': form.firstName },
                      ]"
                      name-icon="user"
                    />
                  </div>
                  <AppMessageInputRequired
                    v-if="
                      !$v.form.firstName.required && $v.form.firstName.$dirty
                    "
                    class="margin-y-10 text-12 text-dark"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <div
                    class="
                      d-flex
                      align-items-center
                      position-relative
                      margin-bottom-10
                    "
                  >
                    <input
                      v-model.trim="$v.form.lastName.$model"
                      role="last-name"
                      type="text"
                      class="
                        padding-start-10
                        border-whiteDark-all
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="الاسم الاخير"
                    />
                  </div>
                  <AppMessageInputRequired
                    v-if="!$v.form.lastName.required && $v.form.lastName.$dirty"
                    class="margin-y-10 text-12 text-dark"
                  />
                </div>
              </div>
              <div
                class="
                  d-flex
                  align-items-center
                  position-relative
                  margin-bottom-10
                "
              >
                <input
                  v-model.trim="$v.form.email.$model"
                  role="email"
                  type="email"
                  class="
                    padding-start-30
                    border-whiteDark-all
                    width-100
                    padding-y-10
                    radius-12
                    text-12
                  "
                  placeholder="البريد الالكتروني"
                />
                <GSvg
                  :class="[
                    'svg-17 fill-silver position-absolute margin-x-10',
                    { 'fill-dark': form.email },
                  ]"
                  name-icon="mail-2"
                />
              </div>
              <AppMessageInputRequired
                v-if="!$v.form.email.required && $v.form.email.$dirty"
                class="margin-y-10 text-12 text-dark"
              />
              <AppMessageInputError
                v-if="!$v.form.email.email && $v.form.email.$dirty"
                type-error="email"
                class="margin-y-10 text-12 text-dark"
              />
              <div
                class="
                  d-flex
                  align-items-center
                  position-relative
                  margin-bottom-10
                "
              >
                <input
                  v-model.trim="$v.form.contactPhone.$model"
                  role="phone"
                  type="text"
                  class="
                    padding-start-30
                    border-whiteDark-all
                    width-100
                    padding-y-10
                    radius-12
                    text-12
                  "
                  placeholder="رقم التواصل"
                />
                <GSvg
                  :class="[
                    'svg-17 fill-silver position-absolute margin-x-10',
                    { 'fill-dark': form.contactPhone },
                  ]"
                  name-icon="smartphone"
                />
              </div>
              <AppMessageInputRequired
                v-if="
                  !$v.form.contactPhone.required && $v.form.contactPhone.$dirty
                "
                class="margin-y-10 text-12 text-dark"
              />
              <AppMessageInputError
                v-if="
                  !$v.form.contactPhone.numeric && $v.form.contactPhone.$dirty
                "
                type-error="num"
                class="margin-y-10 text-12 text-dark"
              />
              <div
                class="
                  d-flex
                  align-items-center
                  position-relative
                  margin-bottom-10
                "
              >
                <textarea
                  v-model.trim="form.aboutMe"
                  style="min-height: 9rem"
                  role="about-me"
                  class="
                    padding-start-30
                    border-whiteDark-all
                    width-100
                    padding-y-10
                    radius-12
                    text-12
                  "
                  placeholder="نبذة عني"
                />
                <GSvg
                  style="top: 1.5rem"
                  :class="[
                    'svg-17 fill-silver position-absolute margin-x-10',
                    { 'fill-dark': form.aboutMe },
                  ]"
                  name-icon="ball-pen-line"
                />
              </div>
              <!--  -->
              <AppUploadFile
                id="uploadCv"
                v-model="$v.form.cv.$model"
                class="margin-top-20 fit-content"
                accept="application/pdf"
              >
                <div class="d-flex align-items-center">
                  <GSvg
                    class="svg-22"
                    name-icon="upload"
                    title="ارفع سيرتك الذاتية"
                  />
                  <span class="text-coral text-13 margin-start-5"
                    >ارفع السيرة الشخصية</span
                  >
                </div>
              </AppUploadFile>
              <!--  -->
              <div
                v-if="form.cv"
                role="this-your-cv"
                class="d-flex align-items-center margin-top-5 text-12"
              >
                <span class="text-coral margin-end-5">تم اختيار:</span>
                <span v-text="form.cv.name" />
              </div>
              <!--  -->
              <AppMessageInputRequired
                v-if="!$v.form.cv.required && $v.form.cv.$dirty"
              />
            </form>
          </div>
        </div>
        <!--  -->
        <div class="col-12">
          <AppBtn
            type="submit"
            style="width: 19.5rem; height: 6rem"
            class="
              btn-voodoo
              text-light
              margin-top-30
              radius-18
              text-14
              mx-auto
              d-block
            "
            @clicked="submit"
          >
            ارسال
          </AppBtn>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'JoinUsInstructor',
  layout: 'site',
  data() {
    return {
      form: {
        image: null,
        firstName: null,
        lastName: null,
        email: null,
        contactPhone: null,
        aboutMe: null,
        cv: null,
      },
    }
  },
  validations: {
    form: {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email,
      },
      contactPhone: {
        numeric,
        required,
      },
      cv: {
        required,
      },
    },
  },
  watch: {
    'form.image'(image) {
      this.$nextTick(
        () => (this.$refs.userImage.src = URL.createObjectURL(image))
      )
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
    },
  },
  head() {
    return {
      title: 'انضم الينا كمدرب',
    }
  },
}
</script>

<style></style>
