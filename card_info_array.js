NAME_TAGS = [
    'Oybjwbo',
    'Frk gblf',
    'Qbhoyr Crargengvba',
    'Pernzcvr',
    'Shgnanev',
    'Zvys',
    'Tnatonat',
    'OQFZ',
    'Cvrepvat',
    'Srzobl',
    'Lhev',
    'Sbbgwbo',
    'Nany',
    'Ovt Oernfgf'
]

TAGS_DESCRIPTION = [

]

function caesarDecrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            char = String.fromCharCode(((code - 65 - 13 + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            char = String.fromCharCode(((code - 97 - 13 + 26) % 26) + 97);
        } else if (code >= 1040 && code <= 1071) {
            char = String.fromCharCode(((code - 1040 - 13 + 32) % 32) + 1040);
        } else if (code >= 1072 && code <= 1103) {
            char = String.fromCharCode(((code - 1072 - 13 + 32) % 32) + 1072);
        }
        result += char;
    }
    return result;
}