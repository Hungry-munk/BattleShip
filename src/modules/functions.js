export function checkNameValidity(name) {
    const InvalidPattern = /^[1-9!@#$%^&*(),.?":{}|<>].*/g;
    if (!name)
        return {
            validity: false,
            message: "cant enter empty name",
        };
    if (name.length === 1) {
        return {
            validity: false,
            message: "name must be longer than 1 character",
        };
    }
    if (InvalidPattern.test(name)) {
        return {
            validity: false,
            message: "cant start with numbers or special character",
        };
    }
    return {
        validity: true,
        message: "",
    };
}
