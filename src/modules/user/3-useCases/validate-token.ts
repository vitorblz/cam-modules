
import { JwtAdapter } from "../2-adapters/jwt-adpter";

export class ValidateToken{

    constructor(private readonly jwtAdapter: JwtAdapter){}

    async exec(ciphertext: string): Promise<string | null>{
        const result = await this.jwtAdapter.decrypt(ciphertext);
        
        if(!result) return null;

        return result;
    }

}