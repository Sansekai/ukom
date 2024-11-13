import { AnimeCard } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const getData = async () => {
  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWM0YWM5ZmVmOTU3NmU4ZmY4YTUyYzE5ZTVkOWZmMyIsIm5iZiI6MTczMDQ4NzgyMy43OTg4MDI5LCJzdWIiOiI2NzI1MjUyOTc3MWY1Y2IxNDk1NThkNTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.m5WBh_RgItNI7big143MLZUPRwAggP0r8c3unFV5KSI'
  }
};

const res = await fetch(url, options);
const data = await res.json();
return data.results;
};

export default async function Home() {
  const data = await getData();
  // console.log(data);
  return (
    <div className="min-h-screen">
      <h2 className="font-bold mb-2 text-3xl">Popular Movie</h2>
      <p className="mb-5">
        Temukan film populer terbaru yang sedang trending hari ini.<br></br>
        Klik pada film untuk melihat detailnya atau cari film yang kamu ingin lihat.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((item: AnimeCard) => (
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
                  <p>{`Rating: ${item.vote_average}`}</p>
                  <p>{`Tanggal Rilis: ${item.release_date}`}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
