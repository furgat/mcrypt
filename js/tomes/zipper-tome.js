angular.module('mCrypt').service('Zipper', function() {
    const zip = function(input) {
      var zipper = (input.length % 2 == 0 ? input.split("") : input.concat(" ").split(""));
      const hl = zipper.length / 2;
      var output = [];

      for (var i = 0; i < hl; i++) {
        output.push(zipper[i]);
        output.push(zipper[i+hl]);
      }

      return output.join("").trim();
    }

    var unzip = function (input) {
      var zipper = input.split("");
      const len = zipper.length;
      var evens = [];
      var odds = [];

      for (var i = 0; i < len; i++) {
        if (i % 2 == 0) {
          evens.push(zipper[i]);
        } else {
          odds.push(zipper[i]);
        }
      }

      return evens.join("").concat(odds.join(""));
    }

    const Zipper = {
        name:'Zipper',
        encrypt: function(text) {
            return zip(text);
        },
        decrypt: function(text) {
            return unzip(text);
        }
    }

    return Zipper;
});
