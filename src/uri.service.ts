import { EncDec } from './interfaces/enc-dec';

export class UriService implements EncDec {
  encode(textPlain: string): string {
    return encodeURIComponent(textPlain);
  }

  decode(encoded: string): string {
    return decodeURIComponent(encoded);
  }
}
