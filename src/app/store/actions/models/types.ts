export type UserState = {
    userToken: string | userType;
    errors: errorType;
    loading: boolean;
    rememberMe: boolean;
}
export type UserRecoverPass = {
    email: string;
    message: string;
    errors:  errorType;
    loading: boolean;

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

export type userType = {
    accessToken: string
}