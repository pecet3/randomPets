import React from "react";

interface IHeader {
  title: string;
}

export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <header className="">
      <h1 className="text-4xl text-green-700">{title}</h1>
    </header>
  );
};
