"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ dt }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="min-w-[470px] relative imgContainer cursor-pointer"
    >
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-thin">
          <span className="font-extrabold">{dt?.title}</span> <br />
          <span>{dt?.release_date}</span> -
          <span>{dt?.vote_average.toPrecision(2)}</span>
        </div>
      </div>
      <Image
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original/${
          dt.backdrop_path || dt.poster_path
        }`}
        width={450}
        height={300}
      />
    </div>
  );
};

export default Movies;
