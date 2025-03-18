import { EncDec } from './interfaces/enc-dec';

export class BinaryService implements EncDec {
  encode(textPlain: string): string {
    return textPlain
      .split('')
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  }

  decode(encoded: string): string {
    return encoded
      .split(' ')
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join('');
  }
}
