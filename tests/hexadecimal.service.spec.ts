import { HexadecimalService } from 'src';

describe('HexadecimalService', () => {
  let service: HexadecimalService;
  const _textMocked = 'some-text';
  beforeAll(() => {
    service = new HexadecimalService();
  });

  it('should encode a string in hexadecimal and match with the entry when decoded', () => {
    const encoded = service.encode(_textMocked);
    const decoded = service.decode(encoded);

    expect(encoded).toBeDefined();
    expect(encoded).not.toBe(_textMocked);

    expect(decoded).toBeDefined();
    expect(decoded).toBe(_textMocked);
  });
});