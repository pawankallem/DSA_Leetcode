/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = {};
    map[s[0]] = 1;
    let maxSS = 0;
    let i = 0, j = 0;

    while( j < s.length ) {
        if(isWindowVali(map,k)) {
            maxSS = Math.max(maxSS, (j-i) + 1 );
            ++j;
            map[s[j]] = map[s[j]] ? ++map[s[j]] : 1;
        }else {
            --map[s[i]];
            ++i;
        }
    }

    return maxSS;

};

const isWindowVali = (map, k) => {
    let total = 0;
    let max = 0;
    for(let i = 0; i < 26; i++) {
        let ch = String.fromCharCode( i+65 );
        if(map[ch]) {
            total += map[ch];
            max = Math.max( max, map[ch] ); 
        }
    }
    
    return ( total - max ) <= k;
}