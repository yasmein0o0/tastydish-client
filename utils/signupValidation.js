export const formValidation = ({ name, email, password, c_password }) => {
    const errors = {}
    if (!name || name.trim().length < 3) {
        errors.name = "Name must be at least 3 characters."
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!password || password.trim().length < 8) {
        errors.password = "Password must be at least 6 characters.";
    }

    if (password !== c_password) {
        errors.c_password = "Passwords do not match.";
    }

    return errors;
}