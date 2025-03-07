<template>
    <div>
      <Form v-slot="{ errors, handleSubmit }" :initial-values="form" @submit="onSubmit">
        <div class="row form-container">
  
          <!-- Name -->
          <div class="col-md-6 mb-3">
            <label for="name" class="form-label">Name <span class="required-asterisk color-red">*</span></label>
            <Field type="text" class="form-control" id="name" name="name" v-model="form.name"
              placeholder="Please enter name" />
            <ErrorMessage class="text-danger" name="name" />
          </div>

          <!-- Cost -->
          <div class="col-md-6 mb-3">
            <label for="cost" class="form-label">Cost <span class="required-asterisk color-red">*</span></label>
            <Field type="number" class="form-control" id="cost" name="cost" v-model="form.cost"
              placeholder="Please enter cost" :min="0" :step="0.01" />
            <ErrorMessage class="text-danger" name="cost" />
          </div>
  
          <!-- Room -->
          <div class="col-md-6 mb-3">
            <label for="room" class="form-label">Room</label>
            <Field type="number" class="form-control" id="room" name="room" v-model="form.room"
              placeholder="Please enter room" :min="0" :step="0.01" />
            <ErrorMessage class="text-danger" name="room" />
          </div>
  
          <!-- Rating -->
          <div class="col-md-6 mb-3">
            <label for="rating" class="form-label">Rating <span class="required-asterisk color-red">*</span></label>
            <Field type="number" class="form-control" id="rating" name="rating" v-model="form.rating"
              placeholder="Please enter rating" :min="0" :step="0.01" />
            <ErrorMessage class="text-danger" name="rating" />
          </div>
  
          <!-- Address -->
          <div class="col-md-12 mb-3">
            <label for="address" class="form-label">Address <span
                class="required-asterisk color-red">*</span></label>
            <Field as="textarea" rows="3" class="form-control" id="address" name="address" v-model="form.address"
              placeholder="Please enter customer address" />
            <ErrorMessage class="text-danger" name="address" />
          </div>
  
          <!-- Submit Button -->
          <div class="col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
  
        </div>
      </Form>
    </div>
  </template>
  
  <script setup lang="js">
  useHead({
    title: "Hotel",
    meta: [
      {
        name: "description",
        content: "Hotel edit page",
      },
    ],
  });
  
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  import Multiselect from "vue-multiselect";
  
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiBaseUrl;
  
  const form = ref({
    id: null,
    name: "",
    cost: "",
    room: "",
    rating: "",
    address: "",
  });

  
  // Form validation schema
  const schema = yup.object().shape({
    name: yup.string().required("Customer Name is required."),
    cost: yup.string().required("Cost is required."),
    room: yup.string().required("Room is required."),
    rating: yup.string().required("Rating is required."),
  });
  
  const props = defineProps({
    customer: Object,
    isEdit: Boolean,
  });
  const emit = defineEmits(["submit"]);
  
  const onSubmit = async (values) => {
    const finalValues = {
      ...values
    };
    emit("submit", finalValues);
  };
  </script>