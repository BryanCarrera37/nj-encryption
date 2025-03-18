import { UriService } from 'src';

describe('UriService', () => {
  let service: UriService;
  const _uriMocked = 'https://some-domain/path/another-path?id=some-id&filter=code and ia';
  beforeAll(() => {
    service = new UriService();
  });

  it('should encode an uri and match with the entry when decoded', () => {
    const encoded = service.encode(_uriMocked);
    const decoded = service.decode(encoded);

    expect(encoded).toBeDefined();
    expect(encoded).toMatch(/^https%3A%2F%2F[\w\-\.]+%2F[\w\-\/%]+(\?[\w%=&]+)?$/);
    expect(encoded).not.toBe(_uriMocked);

    expect(decoded).toBeDefined();
    expect(decoded).toBe(_uriMocked);
  });
});
