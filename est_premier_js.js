// On utilise pas la récursivité à cause des répétitions
// On utilise une boucle while

function est_premier(nombre) {
    if (typeof nombre!="number") {
        return "Il ne s'agit pas d'un nombre entier";
    }
    // On vérifie qu'il ne s'agit pas du nombre 1
    if (nombre===1) {
        return false;
    }
    if (nombre%1===0) {
        let divise = 2;
        while (divise<nombre) {
            if (nombre%divise===0) {
                return false;
            }
            divise+=1;
        }
        if (nombre===divise && nombre%divise===0) {
            return true
        }
    }
}

// Test
console.log(est_premier(8999990909041));