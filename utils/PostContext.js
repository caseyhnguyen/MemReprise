import React, { createContext, useState } from "react";

// Explicitly set the default value of the context
export const PostContext = createContext({
  postMade: false,
  setPostMade: () => {}, // Empty function for the setter
});

export const PostProvider = ({ children }) => {
  const [postMade, setPostMade] = useState(false);

  return (
    <PostContext.Provider value={{ postMade, setPostMade }}>
      {children}
    </PostContext.Provider>
  );
};
