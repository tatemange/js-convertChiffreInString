
const unite = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
const dizaine = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
const appelation = {
    0: "", 2: "cent", 3: "mille",
    6: "million", 9: "milliard",
    12: "billion", 15: "billiard",
    18: "trillion", 21: "trilliard",
    24: "quadrillion", 27: "quadrilliard",
    30: "quintillion", 33: "quintilliard",
    36: "sextillion", 39: "sextilliard",
    42: "septillion", 45: "septilliard",
    48: "octillion", 51: "octilliard",
    54: "nonillion", 57: "nonilliard",
    60: "décillion", 63: "décilliard",
    66: "undécillion", 69: "undécilliard",
    72: "duodécillion", 75: "duodécilliard",
    78: "trédécillion", 81: "trédécilliard",
    84: "quattuordécillion", 87: "quattuordécilliard",
    90: "quindécillion", 93: "quindécilliard",
    96: "sexdécillion", 99: "sexdécilliard",
    102: "septendécillion", 105: "septendécilliard",
    108: "octodécillion", 111: "octodécilliard",
    114: "novemdécillion", 117: "novemdécilliard",
    120: "vigintillion", 123: "vigintilliard",
    126: "unvigintillion", 129: "unvigintilliard",
    132: "duovigintillion", 135: "duovigintilliard",
    138: "tresvigintillion", 141: "tresvigintilliard",
    144: "quattuorvigintillion", 147: "quattuorvigintilliard",
    150: "quinvigintillion", 153: "quinvigintilliard",
    156: "sexvigintillion", 159: "sexvigintilliard",
    162: "septenvigintillion", 165: "septenvigintilliard",
    168: "octovigintillion", 171: "octovigintilliard",
    174: "novemvigintillion", 177: "novemvigintilliard",
    180: "trigintillion", 183: "trigintilliard",
    186: "untrigintillion", 189: "untrigintilliard",
    192: "duotrigintillion", 195: "duotrigintilliard",
    198: "trestrigintillion", 201: "trestrigintilliard",
    204: "quattuortrigintillion", 207: "quattuortrigintilliard",
    210: "quintrigintillion", 213: "quintrigintilliard",
    216: "sextrigintillion", 219: "sextrigintilliard",
    222: "septentrigintillion", 225: "septentrigintilliard",
    228: "octotrigintillion", 231: "octotrigintilliard",
    234: "novemtrigintillion", 237: "novemtrigintilliard",
    240: "quadragintillion", 243: "quadragintilliard",
    246: "unquadragintillion", 249: "unquadragintilliard",
    252: "duoquadragintillion", 255: "duoquadragintilliard",
    258: "tresquadragintillion", 261: "tresquadragintilliard",
    264: "quattuorquadragintillion", 267: "quattuorquadragintilliard",
    270: "quinquadragintillion", 273: "quinquadragintilliard",
    276: "sexquadragintillion", 279: "sexquadragintilliard",
    282: "septenquadragintillion", 285: "septenquadragintilliard",
    288: "octoquadragintillion", 291: "octoquadragintilliard",
    294: "novemquadragintillion", 297: "novemquadragintilliard"
};

const exception = { 11: "onze", 12: "douze", 13: "treize", 14: "quatorze", 15: "quinze", 16: "seize" };



/**
 * 
 * @param {number} nbr 
 */
function lire(nbr) {

    if(nbr < BigInt(0)) {
        let newNbr = BigInt(nbr.toString().replace("-", ""))
        return "moin " + lire(newNbr)
    }

    if(nbr === BigInt(0))
        return "zéro";
    const tab = convertNbrToArray(nbr)
    let tab_letter = []
    for(let i = 0; i < tab.length; i++){
        tab_letter.push(lire_section(tab[i]))
    }

    return concatArray(tab, tab_letter)    
}


function concatArray(tab, tab_letter){
    const chaine = [];
    for(let i = 0; i < tab.length; i++) {
        let taille = ((tab.length - i) - 1) * 3

        if(tab[i] === 0)
            continue
        
        if(tab[i] === 1 && taille === 3){
            chaine.push(appelation[taille])
            continue
        }
        chaine.push(tab_letter[i] + " " + appelation[taille])

    }    
    
    return chaine.join(" ")
}




function lire_section(nbr) {
    if(nbr < 10)
        return unite[nbr];
    if(nbr > 10 && nbr < 17)
        return exception[nbr]
    if ((nbr > 70 && nbr < 76) || (nbr > 90 && nbr < 97))
        return dizaine[Math.floor(nbr / 10) - 1] + " " + exception["1" + (nbr % 10)]
    if(nbr < 100) {
        let tiret = "-"
        if(nbr % 10 === 0)
            tiret = " "
        return dizaine[Math.floor(nbr / 10)] + tiret + unite[nbr % 10]
    }


    // Logique pour les centaines
    let firstNumber = parseInt(nbr.toString().charAt(0))
    let reste = nbr % 100
    let pluriels = ""
    if(firstNumber === 1){
        firstNumber = 0
    } else {
        if(reste === 0)
            pluriels = "s"
    }
    if(reste < 10)
        return unite[firstNumber] + " cent" + pluriels + " " + unite[reste];
    if(reste > 10 && reste < 17)
        return unite[firstNumber] + " cent" + pluriels + " " + exception[reste]
    if ((reste > 70 && reste < 76) || (reste > 90 && reste < 97))
        return unite[firstNumber] + " cent" + pluriels + " " + dizaine[Math.floor(reste / 10) - 1] + " " + exception["1" + (reste % 10)]

    return unite[firstNumber] + " cent" + pluriels + " " + dizaine[Math.floor(reste / 10)] + " " + unite[reste % 10]
}



/**
 * 
 * @param {number} nbr 
 */
function convertNbrToArray(nbr) {
    let nbrToString = [...nbr.toString().split("")]
    for (let i = nbrToString.length - 3; i >= 1; i = i - 3) 
        nbrToString.splice(i, 0, ",");
    
    return nbrToString.join("").split(",").map(k => parseInt(k))       
}


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let numberString = document.querySelector("#ip").value.trim();
    if (!numberString) {
        document.querySelector(".note").textContent = "Veuillez entrer un nombre.";
        return;
    }

    try {
        let bigNumber = BigInt(numberString);
        document.querySelector(".note").textContent = lire(bigNumber);
    } catch (error) {
        document.querySelector(".note").textContent = "Erreur : Veuillez entrer un nombre valide.";
        console.error(error);
    }
});