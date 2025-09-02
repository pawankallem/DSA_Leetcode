/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = {};
    for(let i = 0; i < strs.length; i++) {
        const obj = {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: 0,
            g: 0,
            h: 0,
            i: 0,
            j: 0,
            k: 0,
            l: 0,
            m: 0,
            n: 0,
            o: 0,
            p: 0,
            q: 0,
            r: 0,
            s: 0,
            t: 0,
            u: 0,
            v: 0,
            w: 0,
            x: 0,
            y: 0,
            z: 0
        };

        let word = strs[i];
        for(let j = 0; j < word.length; j++) {
            obj[word[j]]++;
        }
        let str = "";
        for(let k in obj) {
            str += k + "" + obj[k];
        }

        if(!map[str]) {
            map[str] = [strs[i]];
        }else {
            map[str].push(strs[i]);
        }
    }

    

    return Object.values(map);
};