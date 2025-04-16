const unite = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
const dizaine = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
const exception = { 11: "onze", 12: "douze", 13: "treize", 14: "quatorze", 15: "quinze", 16: "seize" };


function split(string, taille = 3) {
    let count = 0;
    let answer = ""
    for (let i = string.length - 1; i >= 0; i--) {
        if (count === taille) {
            answer += "-"
            count = 0
        }
        answer += string[i]
        count++
    }
    answer = answer.split("-")
    return answer.map((a) => a.split("").reverse().join("")).reverse()
}


function getStart(str, start) {
    let newStr = []
    let pos = false
    for (let i = start; i < str.toString().length; i++)
        newStr.push(str.toString()[i])

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== "0") {
            pos = true
            break
        }
    }
    if (pos) return newStr.join("")
    else return "-"
}

/**
 *
 * @param {number} nbr
 */
function lire(nbr) {
    if (nbr === "-") return ""
    if (nbr.toString()[0] === "-") return "moins " + lire(getStart(nbr.toString(), 1))
    if (nbr === 0) return "zero"
    if (nbr.toString()[0] === "0") return lire(getStart(nbr.toString(), 1))
    if (nbr < 10) return unite[nbr]
    if (nbr < 20) {
        if (exception[nbr]) return exception[nbr]
        return dizaine[1] + " " + unite[nbr % 10]
    }
    if (nbr < 100) {
        if(nbr > 70 && nbr < 80) 
            return dizaine[nbr.toString()[0] - 1] + " " + lire(nbr - 60)
        if (nbr > 90) 
            return dizaine[nbr.toString()[0] - 1] + " " + lire(nbr - 80)
        
        return dizaine[nbr.toString()[0]] + " " + unite[nbr % 10]
    }
    if (nbr < 1000) {
        if (nbr < 200) {
            return `cent ${nbr - 100 > 0 ? lire(split(nbr.toString(), 2)[1]) : ""}`
        }
        return unite[nbr.toString()[0]] + " cent " + lire(split(nbr.toString(), 2)[1])
    }
    if (nbr < 1000000) {
        if (nbr < 2000)
            return "mille " + lire(split(nbr.toString(), 3)[1])
        return lire(split(nbr.toString(), 3)[0]) + " mille " + lire(getStart(split(nbr.toString(), 3)[1], 0))
    }
    if (nbr < 1000000000) {
        let reste = nbr - parseInt(`${split(nbr.toString(), 3)[0]}000000`)
        return lire(split(nbr.toString(), 3)[0]) + " million " + lire(getStart(reste, 0))
    }
    if (nbr < 1000000000000) {
        let reste = nbr - parseInt(`${split(nbr.toString(), 3)[0]}000000000`)
        return lire(split(nbr.toString(), 3)[0]) + " milliard " + lire(getStart(reste, 0))
    }
    if (nbr < 1000000000000000) {
        let reste = nbr - parseInt(`${split(nbr.toString(), 3)[0]}000000000000`)
        return lire(split(nbr.toString(), 3)[0]) + " billion " + lire(getStart(reste, 0))
    }
    else return -1
}

const form = document.querySelector("form")
let ip = document.querySelector("#ip")
let result = document.querySelector(".note")

form.addEventListener("submit", (e) => {
    if (lire(parseInt(ip.value)) !== -1) {
        result.textContent = lire(parseInt(ip.value))
    }
    else result.textContent = "[Erreur] verifier votre nombre"
    e.preventDefault()
})
