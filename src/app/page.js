import Movies from "@/components/Movies";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const rest = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=ca401a11cf995d71a0504aef50667277&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await rest.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
}
