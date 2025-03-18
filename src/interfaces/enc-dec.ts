export interface EncDec {
  encode(textPlain: string): string;
  decode(encoded: string): string;
}
