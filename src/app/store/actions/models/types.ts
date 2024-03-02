export type UserState = {
    token: string;
    errors: errorType;
    checked: boolean;
}
export type UserRecoverPass = {
    email: string;
    message: string;
    errors:  errorType;

}
export type CodeVerification = {
    email: string;
    code: string;
    errors:  errorType;
}
export type ChangePasswordType = {
    email: string;
    confirmPassword: string;
    message: string;
    errors:  errorType;
}
export type errorType = {
    statusCode: number,
    error: string,
    message: string,
}

