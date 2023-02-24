
export default function validateInfo(values) {
    let errors = {}
    
    if (!values.userName.trim()) {
        errors.userName= 'Username is required*'
    }

    if (!values.email) {
        errors.email= 'Email is required *** '
    }
    if (!values.password) {
        errors.password= 'Password is required *'
    } else if (values.password.length < 6) {
        errors.password= 'Password must be greater than 6 characters'
    }
    
    if (!values.confirmPassword) {
        errors.confirmPassword= 'Password is required *'
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword= 'Password does not match * '
    }
    return errors
}