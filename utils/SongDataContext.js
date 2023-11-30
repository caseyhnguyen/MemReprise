import React, { createContext, useState, useContext } from "react";

const SongDataContext = createContext();

export const useSongData = () => useContext(SongDataContext);

export const SongDataProvider = ({ children }) => {
  const [songData, setSongData] = useState(null);

  return (
    <SongDataContext.Provider value={{ songData, setSongData }}>
      {children}
    </SongDataContext.Provider>
  );
};
