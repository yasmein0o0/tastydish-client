export const contactValidation = ({ name, email, subject, message }) => {
    const errors = {}
    if (!name || name.trim().length < 3) {
        errors.name = "Name must be at least 3 characters."
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = "Please enter a valid email address.";
    }
    if (subject.trim().length > 100) {
        errors.subject = "Subject charachters must be less than 100"
    }
    if (!subject || subject.trim().length < 3) {
        errors.subject = "message must be at least 3 characters."
    }
    if (message.trim().length > 500) {
        errors.message = "message charachters must be less than 500"
    }
    if (!message || message.trim().length < 3) {
        errors.message = "message must be at least 3 characters."
    }
    return errors
}