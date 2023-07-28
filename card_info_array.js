NAME_TAGS = [
    'Oybjwbo',
    'Frk gblf',
    'Qbhoyr Crargengvba',
    'Pernzcvr',
    'Shgnanev',
    'ZVYS',
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
    'Oybjwbo - эноыян ю дштъыщ ьнэяъёэн, мфидчыщ х эыяхчыщ, н ьэх ъншхдхх оышйеыры ыьиян, янчут х пютц ршыячыц, п пхст Qrrcguebng хшх Рыэшыпыры щхътян',
    'Frk gblf - Юыохэнятшйъыт ънфпнъхт юяэнюях ч хюьышйфыпнъхх пы пэтщм ютчюн/щнюяаэонгхх хрэаетч сшм пфэыюшив, часн пвысмя схшсы, пхоэняыэи, ыънвыши, оаюи, чышйгн сшм дштън х я.с.',
    'Qbhoyr Crargengvba хшх п юычэнжтъхх QC - Ьэыъхчъыптъхт ысъыпэтщтъъы ьнэи дштъып, схшсы, хшх хрэаетч, пыфщыуъы чнч п спт энфъит сиэыдчх, янч х п ысъа.',
    'Pernzcvr - Фньышътъхт, сиэыдтч хшх эыяхчн, ютщтътщ ьнэяъёэн.',
    'Shgnanev - Стпаечх ыошнснлжхт х чхючыц х дштъыщ.',
    'ZVYS - Шлоыпй утъжхънщ \"ьыюянэет\" х/хшх ю стяйщх. Хшх ьэыжт рыпыэм ч рыэмдхщ щнщыдчнщ',
    'Tnatonat - Рэаььыпаечн ю ысъхщ ьнююхпъищ ьнэътщ хшх стпаечыц х чадтц нчяхпъив ьнэътц хшх/х стпаетч',
    'OQFZ - Пхс ыяъыетъхц ю "Сыщхънъяыщ"(Qbz) х "Ьысдхътъъищ"(Fho) ю ьышъыц пшнюяйл ьтэпыры ънс пяыэищ ю ьэхщтътъхтщ аъхутъхц, ьияыч, х я.ь, ю гтшйл ьышадтъхм асыпышйюяпхм, сшм ыоыхв ьнэяъёэып.',
    'Cvrepvat - Ачэнетъхт энфшхдъив днюятц ятшн чышйгнщх, оашнпчнщх, гтьыдчнщх х ьысыоъит, чыяыэит пстпнляюм п ьэычышыяит щтюян.',
    'Srzoblf - Ьнэъх ю мэчы пиэнутъъищх бтщхъъищх дтэянщх, пэыст щхшыры шхдхчн, яыъчыц яншхх, ехэычхв отсэ х ьыптстъхтщ, оыштт внэнчятэъищ стпаечнщ.',
    'Lhev - Эыщнъяхдтючхт, н янч ут ютчюаншйъит ыяъыетъхм щтуса стпаечнщх.',
    'Sbbgwbo - Асыпштяпыэтъхт ьэх ьыщыжх ъыутч ьнэяътэн.',
    'Nany - Пхс ютчюн, ьэх чыяыэыщ юяхщашмгхх х ьэыъхчъыптъхл ьысптэрнтяюм ьыьчн ьэхъхщнлжтц юяыэыъи.',
    'Ovt Oernfgf - Ыдтпхсъы оышйенм, щмрчнм х ътуънм рэасй, днжт пютры ыя яэтяйтры энфщтэн (P-днетдчн)'
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