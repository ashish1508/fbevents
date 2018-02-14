var login = angular.module('login',[]);
login.controller('logincontrol',['$scope','$http','$window',function($scope,$http,$window){
	$scope.user={};
	$scope.login = function(){
		$http.post('/auth/login',$scope.user).then(function(res){
			console.log(res);
			$window.location.href = 'https://events1508.herokuapp.com/home';
			
			
		},function(err){
			console.log(err);
		})

	}
}])
