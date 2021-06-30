let letters = /^[a-zA-Z+" "]+$/;
let digits = /^[0-9]+$/;

const nameValidation = (Name) => {
    if (Name === "") {
        return false;
    } else if (Name.match(letters)) {
        return true;
    } else {
        return false;
    }
}

const emailValidation = (Email) => {
    let dot = Email.lastIndexOf('.');
    let atSymbol = Email.indexOf('@');
    if (Email === "") {
        return false;
    } else if ((dot === -1 && atSymbol === -1) || (dot === -1 || atSymbol === -1)) {
        return false;
    } else if (atSymbol !== Email.lastIndexOf('@')) {
        return false;
    } else if (dot - atSymbol <= 3) {
        return false
    } else if (atSymbol < 3) {
        return false;
    } else {
        return true
    }
}

const phoneValidation = (Phone) => {
    if (Phone === "") {
        return false;
    } else if (Phone.match(digits)) {
        if (Phone.length === 10) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const messageValidation = (Message) => {
    if (messageValidation === "") {
        return false;
    } else if (Message.length < 10) {
        return false;
    } else {
        return true;
    }
}

export const validation = (Name, Email, Phone, Message) => {
    const nameValidationStatus = nameValidation(Name);
    const emailValidationStatus = emailValidation(Email);
    const phoneValidationStatus = phoneValidation(Phone);
    const messageValidationStatus = messageValidation(Message);

    if (nameValidationStatus && emailValidationStatus && phoneValidationStatus && messageValidationStatus) {
        return true;
    } else {
        return false;
    }
}