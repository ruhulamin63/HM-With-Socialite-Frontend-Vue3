import Swal from 'sweetalert2'

export default defineNuxtPlugin((nuxtApp) => {
  // Default settings for SweetAlert2
  const swalWithDefaults = Swal.mixin({
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    customClass: {
      popup: 'swal-popup',
      confirmButton: 'swal-confirm-button',
      cancelButton: 'swal-cancel-button',
    },
  })

  // Custom function to trigger alerts with additional options
  const showAlert = (options = {}) => {
    return swalWithDefaults.fire({
      title: options.title || '',
      text: options.text || '',
      icon: options.icon || 'info',
      showCancelButton: options.showCancelButton ?? false,
      confirmButtonText: options.confirmButtonText || 'Okay',
      cancelButtonText: options.cancelButtonText || 'Cancel',
      position: options.position || 'top-end',
      showConfirmButton: options.showConfirmButton ?? false,
      showCloseButton: options.showCloseButton ?? true,
      timer: options.timer || 3000,
      timerProgressBar: options.timer ? true : false,
      toast: true,
      ...options,
    });
  }

  // Make both SweetAlert2 instance and showAlert function available globally
  nuxtApp.provide('swal', swalWithDefaults)
  nuxtApp.provide('showAlert', showAlert)
})