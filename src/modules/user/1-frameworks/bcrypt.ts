import { Hasher } from "../3-useCases/ports/hasher";
import { HasherCompare } from "../3-useCases/ports/hash-comparer";

import bcrypt from 'bcrypt'

export class Bcrypt implements Hasher, HasherCompare {

    constructor(private readonly salt: number){}

    async hash (plaintext: string){
       return bcrypt.hash(plaintext, this.salt)
    }

    async compare (plaintext: string, digest: string): Promise<boolean> {
        return bcrypt.compare(plaintext, digest)
    }
    
}