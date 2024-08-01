import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

describe('app e2e', () => {
  beforeAll(async () => {
    let app: INestApplication;
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    // eslint-disable-next-line prefer-const
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
  });
  // afterAll(() => {
  //   app.class();
  // });
  it.todo('should pass');
});
