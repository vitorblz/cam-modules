export interface HasherCompare {
    compare: (plaintext: string, digest: string) => Promise<boolean>
}