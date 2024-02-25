def transforme_uper_case(c, number):
    if ord(c)+number>90:
        return chr(ord(c)+number-26)
    elif ord(c)+number<65:
        return chr(ord(c)+number+26)
    return chr(ord(c)+number)

def transforme_lower_case(c, number):
    if ord(c)+number>122:
        return chr(ord(c)+number-26)
    elif ord(c)+number<97:
        return chr(ord(c)+number+26)
    return chr(ord(c) + number)

def transforme_cesare(text_to_encode, number, text_convert=""):
    if not text_to_encode:
        return text_convert
    character = text_to_encode[0]
    if ord(character)>=65 and ord(character)<=90:
        convertion = transforme_uper_case(character, number)
        return transforme_cesare(text_to_encode[1:], number, text_convert + convertion)
    elif ord(character)>=97 and ord(character)<=122:
        convertion = transforme_lower_case(character, number)
        return transforme_cesare(text_to_encode[1:], number, text_convert + convertion)
    return transforme_cesare(text_to_encode[1:], number, text_convert + character)
