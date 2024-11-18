// =========================================================================
// Déclaration des variables   
// =========================================================================
const box = document.getElementById("declaration")
const inp = document.getElementById("cle-activation")
const form = document.getElementById("form-activation")
const error = document.getElementById("message-erreur")

const REGEX_CODE_PRODUIT = /(([\d\w]){5}-){2,4}([\d\w]){5}/;
const listeProduits = {
    "Q1JBC-3ZPX8-TVHUH" : "Final Fantasy 1",
    "P3CJN-JNGJM-XYYT4" : "Contra",
    "2RCWA-XPRPX-GJHPR" : "The Legend of Zelda",
    "H4LS8-L1L3T-08D9X" : "Rygar",
    "KBZB7-PQYDY-D5TMZ-MUABS-JNGJM" : "Metroid",
    "VPTU1-9UZXA-X4ED4-F596J-XPRPX" : "Ninja Gaiden",
    "SUY17-21D57-5QYJU-UE6PN-HZ452" : "Kirby's Adventure"
};
const erreurValidation = {
    "terme" : "Vous devez accepter les termes de l’Accord de souscription Vapeur pour finaliser la transaction.",
    "formatInvalide" : "Le code produit que vous avez saisie est invalide, il ne respecte pas le format requis.",
    "produitInexistant" : "Aucun produit n'est associé au code de produit saisie."
};


// Code pour provoquer une animation sur le bouton Activer
const boutonActiver = document.querySelector('.bouton-activation');
boutonActiver.addEventListener('click', (e) => e.target.classList.add('bouton-click'));
boutonActiver.addEventListener('transitionend', (e) =>  e.target.classList.remove('bouton-click'));

/**
 * Recherche dans le tableau listeProduits un produit associé a un code de produit
 * @param {string} codeProduit Le code de produit à valider
 * @returns true si le produit existe dans le tableau
 */
function isProduitExiste(codeProduit) {
    return listeProduits[codeProduit.toString().toUpperCase()] ? true : false;
}

// =========================================================================
// Ajoutez votre code plus bas                                             =
// =========================================================================
 const par = document.createElement('p');
 
 function meassage( test) {
   
    par.textContent = test;
    error.append(par)
}

inp.addEventListener("keyup" ,validation )

function validation() {
    if(!REGEX_CODE_PRODUIT.test(this.value)){
        meassage(erreurValidation.formatInvalide)
        error.classList.remove('hidden')
    } else{
        error.classList.add('hidden')

    }
   
}
form.addEventListener('submit' , Form)

function Form(e) {
    let bool = false;

    for (const key of Object.keys(listeProduits)) {
        if (inp.value !== key) {
            if (!bool) {
                e.preventDefault();
                meassage(erreurValidation.produitInexistant);
                error.classList.remove('hidden');
                bool = true; 
            }
        } else {
            error.classList.add('hidden');
            break; 
        }
    }

   
    if (!box.checked) {
        e.preventDefault();
        meassage(erreurValidation.terme);
        error.classList.remove("hidden")
    } else {
        error.classList.add("hidden")

    }
}

