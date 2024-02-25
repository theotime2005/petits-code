function transforme_uper_case(c, number) {
    if (c.charCodeAt()+number>90) {
        return String.fromCharCode(c.charCodeAt()+number-26);
    }
    else if (c.charCodeAt()+number<65) {
        return String.fromCharCode(c.charCodeAt()+number+26);
    }
    return String.fromCharCode(c.charCodeAt()+number);
}

function transforme_lower_case(c, number) {
    if (c.charCodeAt()+number>122) {
        return String.fromCharCode(c.charCodeAt()+number-26);
    }
    else if (c.charCodeAt()+number<97) {
        return String.fromCharCode(c.charCodeAt()+number+26);
    }
    return String.fromCharCode(c.charCodeAt()+number);
}

function transforme_cesare(text_to_encode, number, text_convert="") {
    if (text_to_encode.length===0) {
        return text_convert;
    }
    let character = text_to_encode[0];
    if (character.charCodeAt()>=65 && character.charCodeAt()<=90) {
        let convertion = transforme_uper_case(character, number);
        return transforme_cesare(text_to_encode.slice(1), number, text_convert+convertion);
    }
    else if (character.charCodeAt()>=97 && character.charCodeAt()<=122) {
        let convertion = transforme_lower_case(character, number);
        return transforme_cesare(text_to_encode.slice(1), number, text_convert + convertion);
    }
    return transforme_cesare(text_to_encode.slice(1), number, text_convert + character);
}