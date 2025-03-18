import { EncryptionService } from 'src';

describe('EncryptionService', () => {
  let service: EncryptionService;
  beforeAll(() => {
    service = new EncryptionService();
  });

  it('should encrypt a string and match the original text', async () => {
    const text = 'some-secret-value';
    const hash = await service.encrypt(text);

    expect(hash).toBeDefined();
    expect(hash).not.toBe(text);

    const isValid = await service.isMatch(hash, text);
    expect(isValid).toBe(true);
});
});