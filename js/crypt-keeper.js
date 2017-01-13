angular.module('mCrypt').service('CryptKeeper', ['Rot13', function(Rot13) {
    var CryptKeeper = {
        options: {
            Rot13: Rot13
        },
        getOptions: function() {
            var result = [];
            for (var key in this.options) {
                result.push(key);
            }
            return result;
        },
        encrypt: function(text, method) {
            for (var key in this.options) {
                if (key == method)
                    return this.options[key].encrypt(text);
            }
            return 'Method Does Not Exist';
        }
    };
    
    return CryptKeeper;
}]);