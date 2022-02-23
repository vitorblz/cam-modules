export namespace Authentication {
    export type Input = {
        login: string
        password: string
    }

    export type Output = {
        accessToken: string
    }
}