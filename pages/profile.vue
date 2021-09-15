<template>
  <main
    role="profile"
    class="
      profile
      custom-input--object-3 custom-input--object-4
      custom-upload-file-1
    "
  >
    <AppPagesHeader>
      <template slot="head">الملف الشخصي</template>
      <template slot="desc"> إدارة تفاصيل ملفك الشخصي</template>
    </AppPagesHeader>
    <!--  -->
    <section class="bg-alabaster radius-12 padding-y-67">
      <div class="row gx-5 custom-container">
        <div class="col-12 col-md-4 md-margin-top-0 margin-top-50">
          <aside
            class="bg-light radius-21 shadow__user-options-list-1 padding-10"
          >
            <UserOptionsList :add-items="userItems" class="margin-bottom-0" />
          </aside>
        </div>
        <!--  -->
        <div class="col-12 col-md-8">
          <h2
            role="head"
            class="text-18 md-margin-top-10 text-dark margin-bottom-20"
          >
            البيانات الشخصية
          </h2>
          <!--  -->
          <div
            class="
              row
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
              <AppUploadFile
                v-model="form.image"
                accept="image/*"
                style="width: 5.1rem; height: 4.7rem"
                class="bg-voodoo upload-file position-absolute radius-18"
              >
                <GSvg
                  class="svg-22"
                  name-icon="upload-image"
                  title="ارفع صورة"
                />
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
                      v-if="
                        !$v.form.lastName.required && $v.form.lastName.$dirty
                      "
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
                />
                <AppMessageInputError
                  v-if="!$v.form.email.email && $v.form.email.$dirty"
                  type-error="email"
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
                    v-model.trim="$v.form.phone.$model"
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
                    placeholder="رقم الجوال"
                  />
                  <GSvg
                    :class="[
                      'svg-17 fill-silver position-absolute margin-x-10',
                      { 'fill-dark': form.phone },
                    ]"
                    name-icon="smartphone"
                  />
                </div>
                <AppMessageInputError
                  v-if="!$v.form.phone.numeric && $v.form.phone.$dirty"
                  type-error="num"
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
                    v-model.trim="form.address"
                    role="address"
                    type="text"
                    class="
                      padding-start-30
                      border-whiteDark-all
                      width-100
                      padding-y-10
                      radius-12
                      text-12
                    "
                    placeholder="العنوان"
                  />
                  <GSvg
                    :class="[
                      'svg-17 fill-silver position-absolute margin-x-10',
                      { 'fill-dark': form.address },
                    ]"
                    name-icon="map-pin"
                  />
                </div>
                <div class="row">
                  <div
                    class="
                      col
                      d-flex
                      align-items-center
                      position-relative
                      margin-bottom-10
                    "
                  >
                    <input
                      v-model.trim="form.country"
                      role="country"
                      type="text"
                      class="
                        padding-start-30
                        border-whiteDark-all
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="البلد"
                    />
                    <GSvg
                      :class="[
                        'svg-17 fill-silver position-absolute margin-x-10',
                        { 'fill-dark': form.country },
                      ]"
                      name-icon="map-pin"
                    />
                  </div>
                  <div
                    class="
                      col
                      d-flex
                      align-items-center
                      position-relative
                      margin-bottom-10
                    "
                  >
                    <input
                      v-model.trim="form.state"
                      role="state"
                      type="text"
                      class="
                        padding-start-10
                        border-whiteDark-all
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="الولاية"
                    />
                  </div>
                  <div
                    class="
                      col
                      d-flex
                      align-items-center
                      position-relative
                      margin-bottom-10
                    "
                  >
                    <input
                      v-model.trim="form.city"
                      role="state"
                      type="text"
                      class="
                        padding-start-10
                        border-whiteDark-all
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="المدينة"
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
              </form>
            </div>
          </div>
          <!--  -->
          <h2 role="head" class="text-18 text-dark margin-top-20">
            تغيير كلمة المرور
          </h2>
          <div
            class="
              row
              flex-column
              shadow__user-options-list-1
              bg-light
              padding-y-45 padding-x-20
              radius-21
              margin-top-30
            "
          >
            <div class="col">
              <form>
                <div
                  class="
                    d-flex
                    align-items-center
                    position-relative
                    margin-bottom-10
                  "
                >
                  <input
                    v-model.trim="$v.form.oldPassword.$model"
                    role="old-password"
                    type="password"
                    class="
                      padding-start-30
                      border-whiteDark-all
                      width-100
                      padding-y-10
                      radius-12
                      text-12
                    "
                    placeholder="كلمة المرور القديمة"
                  />
                  <GSvg
                    :class="[
                      'svg-17 fill-silver position-absolute margin-x-10',
                      { 'fill-dark': form.oldPassword },
                    ]"
                    name-icon="key-2-line"
                  />
                </div>
                <AppMessageInputRequired
                  v-if="
                    !$v.form.oldPassword.required && $v.form.oldPassword.$dirty
                  "
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
                    v-model.trim.lazy="$v.form.newPassword.$model"
                    role="old-password"
                    type="password"
                    class="
                      padding-start-30
                      border-whiteDark-all
                      width-100
                      padding-y-10
                      radius-12
                      text-12
                    "
                    placeholder="كلمة المرور الجديدة"
                  />
                  <GSvg
                    :class="[
                      'svg-17 fill-silver position-absolute margin-x-10',
                      { 'fill-dark': form.newPassword },
                    ]"
                    name-icon="key-2-line"
                  />
                </div>
                <AppMessageInputError
                  v-if="
                    !$v.form.newPassword.minLength && $v.form.newPassword.$dirty
                  "
                  type-error="custom"
                >
                  يجب ادخال على الاقل
                  {{ $v.form.newPassword.$params.minLength.min }}
                  ادخالات
                </AppMessageInputError>
              </form>
            </div>
          </div>
          <!--  -->
          <h2 role="head" class="text-18 text-dark margin-top-20">
            مواقع التواصل الاجتماعي
          </h2>
          <div
            class="
              row
              flex-column
              shadow__user-options-list-1
              bg-light
              padding-y-45 padding-x-20
              radius-21
              margin-top-30
            "
          >
            <div class="col">
              <form>
                <div class="d-flex">
                  <GSvg
                    class="svg-29 margin-top-5 margin-x-10"
                    name-icon="facebook-color"
                    title="facebook"
                  />
                  <div class="d-flex flex-column width-100 margin-bottom-10">
                    <input
                      v-model.trim="$v.form.facebook.$model"
                      role="enter-your-social-media"
                      type="text"
                      class="
                        padding-start-10
                        border-whiteDark-all
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="/http://www.facebook.com"
                    />
                    <p
                      v-if="!$v.form.facebook.url && $v.form.facebook.$dirty"
                      role="error"
                      class="margin-y-10 text-12 text-dark"
                    >
                      ادخل اللينك بشكل صحيح
                    </p>
                  </div>
                </div>
                <div class="d-flex">
                  <GSvg
                    class="svg-29 margin-top-5 margin-x-10"
                    name-icon="twitter-color"
                    title="twitter"
                  />
                  <div class="d-flex flex-column width-100 margin-bottom-10">
                    <input
                      v-model.trim="$v.form.twitter.$model"
                      role="enter-your-social-media"
                      type="text"
                      class="
                        padding-start-10
                        border-whiteDark-all
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="/http://www.twitter.com"
                    />
                    <p
                      v-if="!$v.form.twitter.url && $v.form.twitter.$dirty"
                      role="error"
                      class="margin-y-10 text-12 text-dark"
                    >
                      ادخل اللينك بشكل صحيح
                    </p>
                  </div>
                </div>
                <div class="d-flex">
                  <GSvg
                    class="svg-29 margin-top-5 margin-x-10"
                    name-icon="linkedin-color"
                    title="linkedin"
                  />
                  <div class="d-flex flex-column width-100 margin-bottom-10">
                    <input
                      v-model.trim="$v.form.linkedin.$model"
                      role="enter-your-social-media"
                      type="text"
                      class="
                        padding-start-10
                        border-whiteDark-all
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="/http://www.linkedin.com"
                    />
                    <p
                      v-if="!$v.form.linkedin.url && $v.form.linkedin.$dirty"
                      role="error"
                      class="margin-y-10 text-12 text-dark"
                    >
                      ادخل اللينك بشكل صحيح
                    </p>
                  </div>
                </div>
                <div class="d-flex">
                  <GSvg
                    class="svg-29 margin-top-5 margin-x-10"
                    name-icon="youtube-color"
                    title="youtube"
                  />
                  <div class="d-flex flex-column width-100 margin-bottom-10">
                    <input
                      v-model.trim="$v.form.youtube.$model"
                      role="enter-your-social-media"
                      type="text"
                      class="
                        padding-start-10
                        border-whiteDark-all
                        width-100
                        padding-y-10
                        radius-12
                        text-12
                      "
                      placeholder="/http://www.youtube.com"
                    />
                    <p
                      v-if="!$v.form.youtube.url && $v.form.youtube.$dirty"
                      role="error"
                      class="margin-y-10 text-12 text-dark"
                    >
                      ادخل اللينك بشكل صحيح
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- Submit -->
          <div class="col">
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
              حفظ التعديلات
            </AppBtn>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {
  required,
  requiredIf,
  email,
  minLength,
  numeric,
  url,
} from 'vuelidate/lib/validators'

export default {
  name: 'Profile',
  validate({ params }) {
    // Must be params string not number and params exsist.
    return /^\D+$/.test(params.name) && params.name
  },
  data() {
    return {
      form: {
        image: null,
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        address: null,
        country: null,
        state: null,
        city: null,
        aboutMe: null,
        oldPassword: null,
        newPassword: null,
        facebook: null,
        twitter: null,
        linkedin: null,
        youtube: null,
      },
      userItems: [
        {
          title: 'دوراتي',
          path: 'my-courses',
          icon: 'book-3-fill',
        },
        {
          title: 'المفضلة',
          path: 'index',
          icon: 'heart-fill',
        },
        {
          title: 'طلبات الشراء',
          path: 'index',
          icon: 'shopping-basket-2-fill',
        },
        {
          title: 'انضم الينا كمدرب',
          path: 'join-us-instructor',
          icon: 'team-fill-1',
        },
        {
          title: 'الحساب البنكي',
          path: 'bank-accounts',
          icon: 'bank',
        },
      ],
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
      phone: {
        numeric,
      },
      oldPassword: {
        required: requiredIf(function () {
          return this.form.newPassword !== null && this.form.newPassword !== ''
        }),
      },
      newPassword: {
        minLength: minLength(10),
      },
      facebook: {
        url,
      },
      twitter: {
        url,
      },
      linkedin: {
        url,
      },
      youtube: {
        url,
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
      title: 'الملف الشخصي',
    }
  },
}
</script>

<style lang="scss">
.profile {
  //
  .user-options {
    @include DetectHover {
      span {
        transition: color 0.3s ease;
      }
    }
    &__item {
      a {
        border-radius: 1.8rem;
        padding: 1.8rem 2.5rem 1.8rem 0;
      }
      span {
        font-size: 1.6rem;
      }

      @include DetectHover {
        &:hover a {
          background-color: #452b4e;
          color: var(--light);
        }
        &:hover svg {
          fill: var(--light);
        }
      }
    }
  }
}
</style>
