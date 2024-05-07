"use client";

import { createContext, useState } from "react";

interface MyContextProps {
  data: {
    artists: string;
    song_name: string;
    cover_url: string;
    song_url: string;
  };
  handleSetData: (data: MyContextProps["data"]) => void;
}

export const MyContext = createContext<MyContextProps>({
  data: {
    artists: "",
    song_name: "",
    cover_url: "",
    song_url: "",
  },
  handleSetData: () => {}
});

export default function MyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<MyContextProps["data"]>({
    artists: "",
    song_name: "",
    cover_url: "",
    song_url: "",
  });

  const handleSetData = (items:MyContextProps["data"]) => {
    setData(items);
    return true;
  }

  return (
    <MyContext.Provider value={{ data, handleSetData }}>
      {children}
    </MyContext.Provider>
  );
}
