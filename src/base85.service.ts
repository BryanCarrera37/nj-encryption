import { EncDec } from './interfaces/enc-dec';
import * as ascii85 from 'ascii85';

export class Base85Service implements EncDec {
  encode(textPlain: string): string {
    return ascii85.encode(Buffer.from(textPlain, 'utf-8')).toString();
  }

  decode(encoded: string): string {
    return ascii85.decode(encoded).toString('utf-8');
  }
}
