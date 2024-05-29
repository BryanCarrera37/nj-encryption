import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionService {

    async encrypt(textPlain: string): Promise<string> {
        return await bcrypt.hash(textPlain, await bcrypt.genSalt());
    }

    async isMatch(hash: string, textPlain: string): Promise<boolean> {
        return await bcrypt.compare(textPlain, hash);
    }
}