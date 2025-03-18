import { get } from './utils/get-bcrypt-depending-environment';

export class EncryptionService {
  readonly bcrypt: any;
  constructor() {
    this.bcrypt = get();
  }

  /**
   * @param textPlain The value to encrypt
   * @returns A promise that will resolves the text passed encrypted with **bcrypt**
   */
  async encrypt(textPlain: string): Promise<string> {
    return await this.bcrypt.hash(textPlain, await this.bcrypt.genSalt());
  }

  /**
   * @param hash The value already encrypted
   * @param textPlain The value to compare with the hash (first param)
   * @returns A Promise that will resolves true is the **textPlain** param is equal to **hash** when encrypted
   */
  async isMatch(hash: string, textPlain: string): Promise<boolean> {
    return await this.bcrypt.compare(textPlain, hash);
  }
}
