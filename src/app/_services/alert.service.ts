import { Injectable } from '@angular/core';
declare var require: any;
const Swal = require('sweetalert2');

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  showSuccessAlert(title: any) {
    Swal.fire({
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 5000,
    });
  }

  showWarningAlert(title: any) {
    Swal.fire({
      icon: 'warning',
      title: title,
      showConfirmButton: false,
      timer: 5000,
    });
  }

  showErrorAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong. Please try again!',
      showConfirmButton: false,
      timer: 5000,
    });
  }

  showSuccessToast(title: any) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 5000,
    });
  }

  showSuccessToastMessageWithTimer(message: any, timer = 5000) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: timer,
    });
  }

  showErrorToast() {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong. Please try again!',
      showConfirmButton: false,
      timer: 5000,
    });
  }

  showErrorToastWithMessage(title: any) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: title,
      showConfirmButton: false,
      timer: 5000,
    });
  }

  showErrorToastMessageWithTimer(message: any, timer = 5000) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: timer,
    });
  }

  showCopied() {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Copied to clipboard!',
      showConfirmButton: false,
      timer: 5000,
    });
  }

  show() {
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 5000,
    });
  }

  errorAlert(text: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: text,
      confirmButtonColor: 'red',
    });
  }

  // confirmAlert(text: string) {
  //   Swal.fire({
  //     title: text,
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then((result:any) => {
  //     if (result.isConfirmed) {
  //       return true;
  //     }
  //   });
  // }
}
