function FormController($scope) {
  this.username;
  this.email;
  this.password;
}

angular
    .module('app')
    .controller('FormController', FormController);
