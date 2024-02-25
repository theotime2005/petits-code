# On utilise pas la récursivité à cause de la longueur de répétition
# On utilise une boucle while

def est_premier(nombre):
    """
    Permet de savoir si un nombre entier est premier
    :param nombre: int
    :return: bool
    """
    # On filtre les nombre en interdisant les décimaux
    if type(nombre)!=int:
        return "Il ne s'agit pas d'un nombre entier"
    # Si le nombre est 1 on renvoi False
    if nombre==1:
        return False
    # On initialize une variable à 1 qui sera incrémentée
    if nombre%1==0:
        divise=2
        while divise<nombre:
            if nombre%divise==0:
                return False
            divise+=1
        if divise==nombre and divise%nombre==0:
            return True
