// 본 강의에서는 javascript object를 사용하지만
// 실제로는 entities에 데이터베이스의 모델을 만들어야 함

export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
