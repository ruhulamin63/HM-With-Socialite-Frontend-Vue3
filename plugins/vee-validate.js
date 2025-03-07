import { defineRule } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";
import { configure } from "vee-validate";

export default defineNuxtPlugin(() => {
  configure({
    validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
  });

  // Define global validation rules
  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);
  defineRule("max", max);

  //   // Custom rule
  defineRule("passwordStrength", (value) => {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(value))
      return "Password must contain an uppercase letter";
    return true; // Valid
  });

  defineRule("uniqueUsername", async (value) => {
    const isTaken = await checkIfUsernameExists(value); // Replace with actual API call
    return isTaken ? "Username is already taken" : true;
  });

  defineRule("optional", (value) => {
    return !value || value.length > 0 ? true : false;
  });

  //<Field name="username" rules="required|uniqueUsername" as="input" />
  // <Field name="username" rules="required" as="input" />
  //<Field name="email" rules="required|email" as="input" />
  //<Field name="password" rules="required|min:8" as="input" />
  //<Field name="username" rules="required|min:3|max:15" as="input" />
  //<Field name="password" rules="passwordStrength" as="input" />

  //   <Field
  //   name="age"
  //   :rules="(value) => (value >= 18 ? true : 'You must be at least 18 years old')"
  //   as="input"
  //   type="number"
  // />

  // defineRule("uniqueUsername", async (value) => {
  //     const isTaken = await checkIfUsernameExists(value); // Replace with actual API call
  //     return isTaken ? "Username is already taken" : true;
  //   });
});
