// "adult": false,
//       "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
//       "genre_ids": [
//         878,
//         28,
//         12
//       ],
//       "id": 912649,
//       "original_language": "en",
//       "original_title": "Venom: The Last Dance",
//       "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
//       "popularity": 5729.834,
//       "poster_path": "/k42Owka8v91trK1qMYwCQCNwJKr.jpg",
//       "release_date": "2024-10-22",
//       "title": "Venom: The Last Dance",
//       "video": false,
//       "vote_average": 6.662,
//       "vote_count": 391

export type AnimeCard = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: string;
};

export interface StreamType {
  data: Datum[];
}

export interface Datum {
  episode_id: number;
  likeCount: number;
  dislikeCount: number;
  userLikeStatus: number;
  reso: string[];
  stream: StreamItemType[];
}

export interface StreamItemType {
  reso: string;
  link: string;
}

export interface DetailsAnimeType {
  data: AnimeDetails[];
}

export interface AnimeDetails {
  id: number;
  series_id: string;
  bookmark: null;
  cover: string;
  judul: string;
  type: string;
  countdown: null;
  status: string;
  rating: string;
  published: string;
  author: string;
  genre: string[];
  genreurl: string[];
  sinopsis: string;
  history: string[];
  historyDurasi: number[];
  historyDurasiFull: number[];
  chapter: Chapter[];
}

export interface Chapter {
  id: number;
  ch: string;
  url: string;
  date: string;
  history: string;
  views: number;
  lastDurasi: null;
  fullDurasi: null;
}
