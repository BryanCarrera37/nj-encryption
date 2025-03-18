import { EncDec } from './interfaces/enc-dec';

export class Base64Service implements EncDec {
  encode(textPlain: string): string {
    return Buffer.from(textPlain, 'utf-8').toString('base64');
  }

  decode(encoded: string): string {
    return Buffer.from(encoded, 'base64').toString('utf-8');
  }
}
