function AppCtrl ($scope, $http)  {
console.log("Hello world from controller");

var refresh = function (){
$http.get('/cvlist').success(function(response) {  
console.log("I got the data I requested");
  $scope.cvlist = response;
  $scope.cv = "";

});	
};

refresh();


$scope.addcv = function(){
   console.log($scope.cv);
   $http.post('/cvlist', $scope.cv).success(function(response){
       console.log(response);
       refresh();
   });

};
//function to reset onentry of info 
$scope.resetcv = function(id){
 console.log(id);
 $http.delete('/cvlist' + id).success(function(response){ 
   refresh();

 });
//function to respond messages to email service of applicant
};
$scope.resetcv = function(){
	$scope.cv = "";
};
}