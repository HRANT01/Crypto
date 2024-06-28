<template>
  <div class="w-full m-auto">
    <h1 class="text-center text-3xl mt-10 mb-5">{{ t('contactBack') }}</h1>
    <form @submit.prevent="validateForm" class="w-[30%] m-auto mb-10 ">
      <CustomInput v-model="name" :error-message="nameError" label="Name"/>
      <CustomInput v-model="lastName" :error-message="lastNameError" label="Last Name"/>
      <CustomInput v-model="email" :error-message="emailError" label="Email"/>
      <CustomInput v-model="phone" :error-message="phoneError" label="Phone"/>
      <button type="submit" class="p-2 min-w-20 w-fit text-white bg-blue-950 rounded">{{t('send')}}</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const name = ref<string>('');
const nameError = ref<string>('');

const email = ref<string>('');
const emailError = ref<string>('');

const phone = ref<string>('');
const phoneError = ref<string>('');

const lastName = ref<string>('');
const lastNameError = ref<string>('');

const validateForm = () => {
  let valid = true;

  if (!name.value) {
    nameError.value = 'Field is Required';
    valid = false;
  } else {
    nameError.value = '';
  }

  if (!lastName.value) {
    lastNameError.value = 'Field is Required';
    valid = false;
  } else {
    lastNameError.value = '';
  }

  if (!email.value) {
    emailError.value = 'Field is Required';
    valid = false;
  } else {
    emailError.value = '';
  }

  if (!phone.value) {
    phoneError.value = 'Field is Required';
    valid = false;
  } else {
    phoneError.value = '';
  }

  if (valid) {
    // Perform form submission or other actions here
    // For now, we just clear the fields
    name.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
  }
};

watch(() => name.value, () => {

})

</script>

<style scoped>
/* Add your styles here if needed */
</style>
