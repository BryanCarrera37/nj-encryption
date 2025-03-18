import { Base64Service } from 'src';

describe('Base64Service', () => {
  let service: Base64Service;
  const _textMocked = 'some-text';
  beforeAll(() => {
    service = new Base64Service();
  });

  it('should encode a string in base64 and match with the entry when decoded', () => {
    const encoded = service.encode(_textMocked);
    const decoded = service.decode(encoded);

    expect(encoded).toBeDefined();
    expect(encoded).not.toBe(_textMocked);

    expect(decoded).toBeDefined();
    expect(decoded).toBe(_textMocked);
  });
});