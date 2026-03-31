import React, { Suspense, useState } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Main from "./Main";

const Root = () => {
    const [count, setCount] = useState(0);


  const allData = fetch("data.json").then((res) => res.json());
 
  return (
    <div>
      <Nav count={count}></Nav>
      <Banner></Banner>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Main allData={allData} setCount={setCount} count={count}></Main>
      </Suspense>
    </div>
  );
};

export default Root;
