angular.module('mCrypt').service('Rot13', function() {
    const rotate = function(input) {
        // credit http://jsfromhell.com/string/rot13
        // example tome
        return input.replace(/[a-zA-Z]/g, function(c){
            return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
    }
    
    const Rot13 = {
        name:'Rot13',
        encrypt: function(text) {
            return rotate(text);
        },
        decrypt: function(text) {
            return rotate(text);
        }
    }

    return Rot13;
});
