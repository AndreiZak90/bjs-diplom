"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      userForm.setLoginErrorMessage(response.error);
    }
  });
};

userForm.registerFormCallback = (data) => {
  ApiConnector.registr(data, (response) => {
    if (!response.success) {
      userForm.setRegisterErrorMessage(response.error);
    } else {
      location.reload();
    }
  });
};
