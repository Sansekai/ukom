import { Chapter } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const handleGetData = async (slug: number) => {
  const url = `https://api.themoviedb.org/3/movie/${slug}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWM0YWM5ZmVmOTU3NmU4ZmY4YTUyYzE5ZTVkOWZmMyIsIm5iZiI6MTczMDQ4NzgyMy43OTg4MDI5LCJzdWIiOiI2NzI1MjUyOTc3MWY1Y2IxNDk1NThkNTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.m5WBh_RgItNI7big143MLZUPRwAggP0r8c3unFV5KSI'
    }
  };
  const response = await fetch(url, options);
  try {
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return {
      data: [],
    };
  }
};

const renderGenres = (genres: { id: number; name: string }[]) => {
  return genres.map(genre => (
    <span key={genre.id} className="bg-gray-700 text-white rounded px-2 py-1 mr-2">
      {genre.name}
    </span>
  ));
};

const renderLanguages = (languages: { iso_639_1: string; name: string; english_name: string }[]) => {
  return languages.map(lang => (
    <div key={lang.iso_639_1}>
      {lang.name} ({lang.english_name})
    </div>
  ));
};

export default async function Latest({ params }: { params: { slug: number } }) {
  const data = await handleGetData(params.slug);
  // if (data.data.length === 0) {
  //   return <div>Not Found</div>;
  // }

  return (
    <div className="">
      <div className="md:flex gap-5">
        <div className="flex justify-center">
          <Image
            width={400}
            height={700}
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
            alt={data.title}
          />
        </div>
        <div className="max-h-[100vh] overflow-auto w-full md:max-w-[100%]">
          <h6 className="font-bold text-lg mb-2 sticky top-0 bg-white dark:bg-slate-950">
            {data?.title}
          </h6>
          <div className="text-pretty">
            <h6 className="font-semibold">Overview:</h6>
            <p>{data.overview}</p>
            <h6 className="font-semibold mt-4">Genres:</h6>
            <div className="flex flex-wrap">
              {renderGenres(data.genres)}
            </div>
            <h6 className="font-semibold mt-4">Release Date:</h6>
            <p>{data.release_date}</p>
            <h6 className="font-semibold mt-4">Languages:</h6>
            <div>
              {renderLanguages(data.spoken_languages)}
            </div>
            <h6 className="font-semibold mt-4">Vote Average:</h6>
            <p>{data.vote_average} ({data.vote_count} votes)</p>
          </div>
        </div>
      </div>
    </div>
  );
}