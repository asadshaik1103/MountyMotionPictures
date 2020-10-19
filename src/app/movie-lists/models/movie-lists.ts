export interface TopRatedMovies {
    page: number;
    totalResults: number;
    totalPages: number;
    results: Results[];
}

export interface Results {
    popularity: number,
    voteCount: number;
    video: boolean;
    posterPath: string;
    id: number;
    adult: boolean;
    backdropPath: string;
    originalLanguage: string;
    originalTitle: string;
    genreIds: number[];
    title: string;
    voteAverage: number;
    overview: string;
    releaseDate: string;
}

export interface UpcomingMovies {
    dates: DateStrings;
    page: number;
    results: Results[];
    totalPages: number;
    totalResults: number;
}

export interface DateStrings {
    maximum: string;
    minimum: string;
}
