<template>
  <!-- Main Modal Structure -->
  <div class="modal" tabindex="-1" :class="{ 'show': isVisible }">
    <div class="modal-dialog" @click="handleClickInside">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="sa-close sa-close--modal" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue';

// Define props
defineProps({
  title: {
    type: String,
    default: 'Create User',
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
  onSave: {
    type: Function,
    required: false, // If not always needed, make it optional
  },
});

// Define emits for communication
const emit = defineEmits(['update:isVisible']);

// Close modal function
const closeModal = () => {
  emit('update:isVisible', false);
};

// Track if click was inside the modal-dialog
const modalDialogRef = ref(null);

const handleClickInside = (event) => {
  if (modalDialogRef.value && !modalDialogRef.value.contains(event.target)) {
    closeModal();
  }
};

// Expose modal dialog ref
const setModalDialogRef = (element) => {
  modalDialogRef.value = element;
};
</script>

<style scoped>
.modal {
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Optional backdrop */
  z-index: 1050;
}

.modal.show {
  display: block;
  opacity: 1;
}

.modal-dialog {
  margin: 1.75rem auto;
}

.sa-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
