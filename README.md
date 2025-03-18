# nj-encryption

This is a library that can be used in Node.js projects when you need to include encryption and also handle encode and decode operations in different ways (base64, binary, hexadecimal, etc).

It's good to know that the **encryption (EncryptionService)** works with **bcrypt**

## Instructions

### Installation
```bash
$ npm install @bryancm/nj-encryption
```

### Usage

After adding the library in your project you can use any of the functionalities listed below. Basically the usage is like:

```ts
import { Base64Service, UriService } from '@bryancm/nj-encryption';

const base64Service = new Base64Service();
const uriService = new UriService();

const paramEncoded = base64Service.encode('some-id');
const uriEncoded = uriService.encode(`https//some-domain.com?id=${paramEncoded}`);
```

### Usage with NestJS and Angular

With NestJS and Angular we can get a particular usage because the existence of a **module (EncryptionModule)**. This module includes all the services as providers, so that, you can handle **DI (Dependency Injection)** and **Modular Development** in your projects:

```ts
import { EncryptionModule } from '@bryancm/nj-encryption';

@Module({
  imports: [
    EncryptionModule,
    ...
  ],
  ...
})
export class SomeOfYourModules {}
```

## List of Functionalities

Basically you can execute decode and encode operations with any of these services:

- base64 - **Base64Service**
- base85 (ASCII85) - **Base85Service**
- binary - **BinaryService**
- hexadecimal - **HexadecimalService**
- uri - **UriService**

Now, when you use **EncryptionService** you'll be able to handle:

- **encrypt:** To encrypt any text you want with bcrypt.
- **isMatch:** To verify is a text plain corresponds to the encrypted value.
