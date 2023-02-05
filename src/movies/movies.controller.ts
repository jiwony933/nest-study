import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

// 컨트롤러는 url 매핑, 리퀘스트 받기, query 넘기기

@Controller('movies') // 엔드 포인트를 관리
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies() {
    return this.moviesService.getMovies();
  }

  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `We searching a movie made after  : ${searchingYear} `;
  }

  @Get(':id') // 데코레이터 안의 "id" 파라미터는 같아야함
  getMovie(@Param('id') id: number): Movie {
    return this.moviesService.getMovie(id);
  }

  @Post()
  createMovie(@Body() movieData) {
    return this.moviesService.createMovie(movieData);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number) {
    return this.moviesService.deleteMovie(id);
  }

  @Patch(':id')
  updateMovie(@Param('id') @Body() movieData) {
    return;
  }
}
