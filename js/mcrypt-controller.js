angular.module('mCrypt').controller('CryptCtrl', ['$scope', '$timeout', 'CryptKeeper', function($scope, $timeout, CryptKeeper) {
    $scope.cryptKindOptions = CryptKeeper.getOptions();
    $scope.userInput = {
        toCrypt: 'Please Enter some Input',
        kind: $scope.cryptKindOptions[0]
    };
   
    $scope.result = '';
    $scope.copiedMessage = '';
    $scope.encryptMessage = '';
    $scope.userTheme = 'dark';
    
    $scope.submitForm = function() {
        $scope.result = CryptKeeper.encrypt($scope.userInput.toCrypt, $scope.userInput.kind);
        if ( $scope.result != 'Method Does Not Exist') {
            $scope.cryptMessage('ENCRYPTED!', 3000);
        } else {
            $scope.result = '';
            $scope.cryptMessage('Failed,,, :C', 3000);
        }
    }
    
    $scope.copySuccess = function() {
        $scope.copyMessage('COPIED!', 3000);    
    }
    
    $scope.copyFailed = function() {
        $scope.copyMessage('Failed,,, :C', 3000);
    }
    
    $scope.copyMessage = function(msg, duration) {
        $scope.copiedMessage = msg;
        $timeout(duration).then(function() {
            $scope.copiedMessage = '';
        });
    }
    
    $scope.cryptMessage = function(msg, duration) {
        $scope.encryptMessage = msg;
        $timeout(duration).then(function() {
            $scope.encryptMessage = ''; 
        });
    }
    
    $scope.toggleTheme = function() {
        $scope.userTheme = ($scope.userTheme == 'light' ? 'dark' : 'light');
    }
}]);