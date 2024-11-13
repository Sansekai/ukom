import { Card, CardContent } from '@/components/ui/card';
import { AnimeCard } from '@/lib/types';
import Link from 'next/link';
import React from 'react';

const getdata = async (keyword: string) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=true&language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWM0YWM5ZmVmOTU3NmU4ZmY4YTUyYzE5ZTVkOWZmMyIsIm5iZiI6MTczMDU3NzYxNC42NzgyNTI3LCJzdWIiOiI2NzI1MjUyOTc3MWY1Y2IxNDk1NThkNTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cZNvMXJEDJW5RNhNl5HOdjRfIVHCsh02igKjwW7I1Ew'
  }
};

const response = await fetch(url, options);
const data = await response.json();
return data;
};

export default async function page({
  params,
}: {
  params: { keyword: string };
}) {
  const data = await getdata(params.keyword);
  if (data.results.length === 0) {
    return <div>Not Found</div>;
  }
  return (
    <div>
      <p className="mb-5">
        Total <span className="font-bold">{data.results.length}</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen">
        {data.results.map((item: AnimeCard) => (
          <Link key={item.id} href={`/details/${encodeURIComponent(item.id)}`}>
            <Card className="overflow-hidden cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardContent>
                <div className="pt-2">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p>{item.media_type}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
