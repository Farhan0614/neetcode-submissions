class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        
        for (let str of strs) {
            encodedString += str.length + "#" + str;
        }
        
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedList = [];
        let i = 0; 
        
        while (i < str.length) {
            let j = i;
            
            while (str[j] !== '#') {
                j++;
            }
            
            let wordLength = parseInt(str.substring(i, j));
            
            let word = str.substring(j + 1, j + 1 + wordLength);
            decodedList.push(word);
            
            i = j + 1 + wordLength;
        }
        
        return decodedList;
    }
}