import { EncDec } from './interfaces/enc-dec';

export class HexadecimalService implements EncDec {
  encode(textPlain: string): string {
    return Buffer.from(textPlain, 'utf-8').toString('hex');
  }

  decode(encoded: string): string {
    return Buffer.from(encoded, 'hex').toString('utf-8');
  }
}
