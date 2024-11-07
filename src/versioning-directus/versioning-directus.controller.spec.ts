import { Test, TestingModule } from '@nestjs/testing';
import { VersioningDirectusController } from './versioning-directus.controller';

describe('VersioningDirectusController', () => {
  let controller: VersioningDirectusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersioningDirectusController],
    }).compile();

    controller = module.get<VersioningDirectusController>(VersioningDirectusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
