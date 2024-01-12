export const checkValidData = (email, password, name) => {
    const isEmailValid = /^([a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    // const isNameValid = /^[a-z,',-]+(\s)[a-z,',-]+$/i.test(name);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    // if(!isNameValid) return "The name that you entered is not valid";
    return null;
    
}