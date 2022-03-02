

import jwt from 'jsonwebtoken'
import { Encrypter } from '../3-useCases/ports/Encrypter'
import { Decrypter } from './ports/decrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (payload: any): Promise<string> {
    return jwt.sign(payload, this.secret, { expiresIn: '24h' })
  }

  async decrypt (ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}
