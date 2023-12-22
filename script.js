// clickCount = 0;
// document.querySelector(".addItem").addEventListener("click", function() {
//   clickCount += 1;
//   // alert("Cart Count is " + clickCount);
//   document.querySelector("p").innerHTML = `Cart has ${clickCount} Items.`;
// });

// document.querySelector(".removeItem").addEventListener("click", function() {
//   if(clickCount > 0) {
//     clickCount -= 1;
//     // alert("Cart Count is " + clickCount);
//     document.querySelector("p").innerHTML = `Cart has ${clickCount} Items.`;
//     if(clickCount == 0) {
//       document.querySelector("p").innerHTML = ``;
//     }
//   }
// });

// alert("HE");
let myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope) {
  $scope.username = '';
  $scope.password = '';
  $scope.noAttempts = 0;
  $scope.submitForm = () => {
    alert('Form submitted');
  }

  $scope.login = function() {
    if($scope.username == 'Yashas' && $scope.password == '12345678') {
      alert('Login Successfull');
    } else {
      $scope.noAttempts += 1;
      if($scope.noAttempts <= 3) {
        alert(`Incorrect user name or password! Attempt No : ${$scope.noAttempts} ${$scope.username} ${$scope.password}`);
      } else {
        document.getElementById('loginButton').disabled = true;
      }
    }
  }
});