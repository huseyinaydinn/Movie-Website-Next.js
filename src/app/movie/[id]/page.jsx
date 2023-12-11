"use client";
import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ca401a11cf995d71a0504aef50667277`
  );

  return await res.json();
};

const Page = async ({ params }) => {
  const id = params?.id;
  const movieDetail = await getMovie(id);

  console.log(movieDetail);
  return (
    <div className="relative p-7 min-h-screen ">
      <Image
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail.backdrop_path || movieDetail.poster_path
        }`}
        fill
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className="my-3">
          <span>{movieDetail?.release_date}</span> -
          <span>{movieDetail?.vote_average}</span>
        </div>
        <div className="my-2 border w-32 hover:bg-white hover:text-black transition-all duration-300 p-2 rounded-md text-center cursor-pointer text-lg">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
