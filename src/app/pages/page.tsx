import React from "react";
import Pages from "./pages";
import Summary from "./summary";

const Page = () => {
  return (
    <div className="">
      <div className="min-h-screen flex items-left mr-24 pt-32 justify-center">
        <Pages />
        <Summary />
      </div>
    </div>
  );
};

export default Page;
