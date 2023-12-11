"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    {
      name: "Popular Movies",
      url: "popular",
    },
    {
      name: "Top Rated",
      url: "top_rated",
    },
    {
      name: "Upcoming Movies",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-900 flex flex-wrap items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          href={`/?genre=${tab.url}`}
          key={i}
          className={`cursor-pointer hover:opacity-80 transition-opacity ${
            tab.url === genre
              ? "underline text-amber-600 underline-offset-8"
              : ""
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
