<template>
  <main
    role="join-us-as-an-instuctor"
    class="custom-input--object-3 custom-input--object-4 custom-upload-file-1"
  >
    <header class="text-center padding-y-45 margin-bottom-50">
      <h1 class="text-30 text-dark margin-bottom-10">انضم الينا كمدرب</h1>
      <p class="text-14 text-silver weight-br-300">
        انضم الينا الآن كمدرب اذا كان عندك القدرة على التدريب
      </p>
    </header>
    <!--  -->
    <section class="bg-alabaster radius-12 padding-y-67">
      <div class="row custom-container justify-content-center">
        <!--  -->
        <div
          class="
            row
            col-md-9
            flex-column
            shadow__user-options-list-1
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
            <UploadFile
              accept="image/*"
              style="width: 5.1rem; height: 4.7rem"
              class="bg-voodoo upload-file position-absolute radius-18"
              @uploadFile="form.image = $event"
            >
              <GSvg class="svg-22" name-icon="upload-image" title="ارفع صورة" />
            </UploadFile>
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
                        border-whiteDark-1
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
                  <p
                    v-if="
                      !$v.form.firstName.required && $v.form.firstName.$dirty
                    "
                    role="error"
                    class="margin-y-10 text-12 text-dark"
                  >
                    مطلوب ادخاله
                  </p>
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
                        border-whiteDark-1
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="الاسم الاخير"
                    />
                  </div>
                  <p
                    v-if="!$v.form.lastName.required && $v.form.lastName.$dirty"
                    role="error"
                    class="margin-y-10 text-12 text-dark"
                  >
                    مطلوب ادخاله
                  </p>
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
                    border-whiteDark-1
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
              <p
                v-if="!$v.form.email.required && $v.form.email.$dirty"
                role="error"
                class="margin-y-10 text-12 text-dark"
              >
                مطلوب ادخاله
              </p>
              <p
                v-if="!$v.form.email.email && $v.form.email.$dirty"
                role="error"
                class="margin-y-10 text-12 text-dark"
              >
                ادخل الايميل بشكل صحيح
              </p>
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
                    border-whiteDark-1
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
              <p
                v-if="
                  !$v.form.contactPhone.required && $v.form.contactPhone.$dirty
                "
                role="require"
                class="margin-y-10 text-12 text-dark"
              >
                مطلوب ادخاله
              </p>
              <p
                v-if="
                  !$v.form.contactPhone.numeric && $v.form.contactPhone.$dirty
                "
                role="error"
                class="margin-y-10 text-12 text-dark"
              >
                يجب ادخال ارقام فقط
              </p>
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
                    border-whiteDark-1
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
              <UploadFile
                id="uploadCv"
                class="margin-top-20 fit-content"
                accept="application/pdf"
                @uploadFile="form.cv = $event"
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
              </UploadFile>
              <!--  -->
              <div
                v-if="form.cv"
                role="this-your-cv"
                class="d-flex align-items-center margin-top-5 text-12"
              >
                <span class="text-coral margin-end-5">تم اختيار:</span>
                <span v-text="form.cv.name" />
              </div>
            </form>
          </div>
        </div>
        <!--  -->
        <div class="col-12">
          <BtnPrimary
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
            disabled
            @clicked="submit"
          >
            ارسال
          </BtnPrimary>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'
export default {
  name: 'JoinUsInstructor',
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
  head: {
    title: 'انضم الينا كمدرب',
  },
}
</script>

<style></style>
