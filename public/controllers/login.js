var login = angular.module('login',[]);
login.controller('logincontrol',['$scope','$http',function($scope,$http){
	$scope.user={};
	$scope.login = function(){
		$http.post('/auth/login',$scope.user)

	}
}])