export const generateAvatar = (fullName) => {
    const arr = fullName?.split(" ")
    return `${arr?.[0].charAt(0)}${arr?.[arr.length - 1].charAt(0)}`.toUpperCase()
}