/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {

    if(word.length < 3) return false;

    let isVowel = false;
    let isConsonant = false;
    let isNum = false;

    for(let i = 0; i < word.length; i++) {
        let ch = word[i];
        let chCode = ch.charCodeAt(0);
        if(chCode >= 65 && chCode < 97 + 26) {
            let lowerCh = ch.toLowerCase();
            if(lowerCh == 'a' || lowerCh == 'e' || lowerCh == 'i' || lowerCh == 'o' || lowerCh == 'u') isVowel = true;
            else isConsonant = true;
        }else if( ch >= 0 && ch <= 9) {
            isNum = true;
        }else {
            return false;
        }
    }
    if(isVowel && isConsonant) return true;
    return false;
    
};