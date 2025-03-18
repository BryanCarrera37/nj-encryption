import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { Base64Service } from './base64.service';
import { Base85Service } from './base85.service';
import { BinaryService } from './binary.service';
import { HexadecimalService } from './hexadecimal.service';
import { UriService } from './uri.service';

@Module({
  exports: [Base64Service, Base85Service, BinaryService, EncryptionService, HexadecimalService, UriService],
  providers: [Base64Service, Base85Service, BinaryService, EncryptionService, HexadecimalService, UriService],
})
export class EncryptionModule {}
