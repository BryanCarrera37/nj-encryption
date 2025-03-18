import { Base85Service } from 'src';

describe('Base85Service', () => {
  let service: Base85Service;
  const _textMocked = 'some-text';
  beforeAll(() => {
    service = new Base85Service();
  });

  it('should encode a string in base85 (ascii85) and match with the entry when decoded', () => {
    const encoded = service.encode(_textMocked);
    const decoded = service.decode(encoded);

    expect(encoded).toBeDefined();
    expect(encoded).not.toBe(_textMocked);

    expect(decoded).toBeDefined();
    expect(decoded).toBe(_textMocked);
  });
});