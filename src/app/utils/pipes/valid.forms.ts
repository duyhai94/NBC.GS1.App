import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function invalidForm(nameRe: RegExp, errorName: string): ValidatorFn {
   return (control: AbstractControl): ValidationErrors | null => {
   const valid = nameRe.test(control.value);
   const _error: ValidationErrors = {};
   _error[errorName] = {value: control.value}
   return !valid ? _error : null;
   };
}


export const FormToast = {
   //login
   errLogin: 'Email và mật khẩu không chính xác',
   //email
   errValidEmail : 'Địa chỉ Email không hợp lệ',
   emptyEmail: 'Nhập Email',
   //password
   emptyPassword: 'Nhập mật khẩu',
   //phone
   emptyPhone: 'Nhập số điện thoại',
   errValidPhone: 'Số điện thoại không hợp lệ',
   //forgot
   errForgot: 'Số điện thoại không tồn tại',
   //reset
   errValidPasswod: 'Mật khẩu bao gồm ký tự đặc biệt chữ và số',
   errValidTruePassword: 'Mật khẩu không khớp',
   
}