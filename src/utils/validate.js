export const checkValidData = (email, password, name) => {
    const isEmailValid = /^([a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);

    if(!isEmailValid) return "Please enter the valid email-address.";
    if(!isPasswordValid) return "Please enter the valid password.";
    if(!isNameValid) return "The name that you entered is not valid.";
    return null;
    
}