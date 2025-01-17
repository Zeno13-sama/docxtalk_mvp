import React from "react";
// import useOnPlay from "./hooks/useOnPlay"; // Assurez-vous que le chemin est correct
import SongItem from "./components/SongItem"; // Assurez-vous que le chemin est correct

const PageContent = ({ songs }) => {
//   const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>;
  }

  return (
    <div
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      "
    >
      {/* {songs.map((item) => (
        <SongItem onClick={(id) => onPlay(id)} key={item.id} data={item} />
      ))} */}
    </div>
  );
};

export default PageContent;
