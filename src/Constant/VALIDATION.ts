export const emailValidation = {
    required: 'email is required',
    pattern: {
        // eslint-disable-next-line no-useless-escape
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'invalid mail'
    }
}