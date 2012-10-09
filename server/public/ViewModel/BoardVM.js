function BoardVM() {
    var self = this;
    self.boardSize = 10;
    self.rows = new Array(self.boardSize);

    self.initialize = function () {
        for (i = 0; i < self.boardSize; i++) {
            self.rows[i] = new Array(self.boardSize);
            for (j = 0; j < self.boardSize; j++) {
                self.rows[i][j] = new LetterTileVM();
            }
        }
    };

    self.isValid = ko.computed(function () {
        var words = new Array();

        // get horizontal words
        for (i = 0; i < self.boardSize; i++) {
            var word = '';
            for (j = 0; j < self.boardSize; j++) {
                if (self.rows[i][j].letter() !== '') {
                    word += self.rows[i][j].letter();
                }
                if (self.rows[i][j].letter() === '' && word !== '') {
                    break;
                }
            }
            if (word.length > 1) {
                words.push(word);
            }
        }

        // get vertical words
        for (i = 0; i < self.boardSize; i++) {
            var word = '';
            for (j = 0; j < self.boardSize; j++) {
                if (self.rows[j][i].letter() !== '') {
                    word += self.rows[j][i].letter();
                }
                if (self.rows[j][i].letter() === '' && word !== '') {
                    break;
                }
            }
            if (word.length > 1) {
                words.push(word);
            }
        }

        for (i = 0; i < words.length; i++) {
            if (checkWord(words[i]) == false)
                return false;
            return true;
        }
    });

    self.checkWord = function (word) {
        return true;
    }
}

function LetterTileVM() {
    var self = this;
    self.letter = ko.observable('');

    pointValue = ko.computed(function () {
        return getLetterValue(self.letter());
    });
}


function getLetterValue(letter) {
    switch (letter)
    {
        case "z":
            return 10;

        default:
            return 1;
    }
}