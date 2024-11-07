import { Module } from '@nestjs/common';
import { VersioningDirectusController } from './versioning-directus.controller';

@Module({
    controllers: [VersioningDirectusController]
})
export class VersioningDirectusModule { }
