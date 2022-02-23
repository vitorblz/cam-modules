export interface Encrypter {
    encrypt: (values: any) => Promise<any>
}
  