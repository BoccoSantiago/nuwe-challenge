

export default function validation(values){
    
    let errors = {}
    let userNameRegex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if(!values.fullName){
        errors.fullName = "Full Name is required."
    }
    if(!values.userName){
        errors.userName = "User Name is required."
    } else if(!userNameRegex.test(values.userName)){
        errors.userName = "User Name is invalid."
    }
    if(!values.email){
        errors.email = "Email is required."
    } else if(!emailRegex.test(values.email)){
        errors.email = "Email is invalid."
    }
    if(!values.password){
        errors.password = "Password is required."
    } else if(!passwordRegex.test(values.password)){
        errors.password = "Password must contain at least six characters, one letter, one number and one special character."
    }
    if(!values.confirmPassword){
        errors.confirmPassword = "Password is required."
    } else if(values.confirmPassword !== values.password){
        errors.confirmPassword = "Passwords does not match."
    }

    return errors
} 