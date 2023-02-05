import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], // 컨트롤러 : url을 가져오고, 함수를 실행 (express-router)
  providers: [MoviesService], //
})
export class AppModule {}
