import * as yup from 'yup';

// Example of adding a custom validation
// yup.addMethod(yup.string, 'isValidEmail', function (message) {
//   return this.test('is-valid-email', message, function (value) {
//     const { path, createError } = this;
//     return value && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
//       ? true
//       : createError({ path, message });
//   });
// });

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('yup', yup); // Provides yup globally as $yup
});
