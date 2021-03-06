angular.module('mCrypt').service('CryptKeeper', ['Rot13', 'Zipper', function(Rot13, Zipper) {
    var getMethod = function(method, options) {
        for (var key in options) {
            if (key == method)
                return key;
        }
        return 'Method Does Not Exist'
    }
    var CryptKeeper = {
        options: {
            Rot13: Rot13,
            Zipper: Zipper
        },
        getOptions: function() {
            var result = [];
            for (var key in this.options) {
                result.push(key);
            }
            return result;
        },
        encrypt: function(text, method) {
            return this.options[getMethod(method, this.options)].encrypt(text);
        },
        decrypt: function(text, method) {
            return this.options[getMethod(method, this.options)].decrypt(text);
        }
    };

    return CryptKeeper;
}]);
