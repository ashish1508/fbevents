myapp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider
	.when('/signup',{
		templateUrl :'views/signup.html',
		controller : 'signupcontrol'
	})

	.when('/login',{
		templateUrl :'views/login.html',
		controller : 'logincontrol'
	})

	.when('/page1',{
		templateUrl :'views/page1.html',
		controller:'page1control'
		})

	.when('/events',{
		templateUrl :'views/events.html',
		controller:'eventcontrol'
	})

	.when('/myeves',{
		templateUrl:'views/myevents.html',
		controller:'myeventcontrol'
	})

	.when('/invitedevents',{
		templateUrl:'views/invevents.html',
		controller:'invitecontrol'
	})


	.when('/page2',{
		templateUrl :'views/page2.html',
		controller:'page2control'
	}).otherwise({
		redirectTo : 'views/home.html'
	});
	$locationProvider.html5Mode({
       enabled: true,
       requireBase: false
    })

}])