import React, { createContext, useState } from "react";

export const PostContext = createContext({
  postMade: false,
  setPostMade: () => {},
});

export const PostProvider = ({ children }) => {
  const [postMade, setPostMade] = useState(false);

  return (
    <PostContext.Provider value={{ postMade, setPostMade }}>
      {children}
    </PostContext.Provider>
  );
};
