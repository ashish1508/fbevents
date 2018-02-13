var signup = angular.module('signup',[]);
signup.controller('signupcontrol',['$scope','$http',function($scope,$http){
	$scope.user ={};
	$scope.signup = function(){
		$http.post('/signup',$scope.user).when(function(res){
			console.log("success");
		})
	}
}])