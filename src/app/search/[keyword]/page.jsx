import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ca401a11cf995d71a0504aef50667277&query=${keyword}&language=en-US`
  );
  const data = await res.json();
  return (
    <div className="flex items-center flex-wrap gap-3">
      {data?.results ? (
        data?.results?.map((dt, i) => <Movies key={i} dt={dt} />)
      ) : (
        <div>Film bulunamadı</div>
      )}
    </div>
  );
};

export default Page;
