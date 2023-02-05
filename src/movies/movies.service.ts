import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

// 서비스에서는 쿼리 등을 처리

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    return this.movies.find((movie) => movie.id === id);
  }

  deleteMovie(id: number): boolean {
    this.movies.filter((movies) => movies.id !== id);
    return true;
  }

  createMovie(movieData: { title: string; year: number; genres: string[] }) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
