import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Main from "./Main";
import PremiumCart from "./PremiumCart/PremiumCart";
import PriceCart from "./PriceCart/PriceCart";
import WorkFlowBanner from "./WorkFlowBanner/WorkFlowBanner";
import Footer from "./Footer/Footer";

const Root = () => {
  const [count, setCount] = useState(0);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  return (
    <div>
      <Nav count={count} />
      <Banner></Banner>
      <Main allData={allData} setCount={setCount} count={count} />
      <PremiumCart></PremiumCart>
      <PriceCart></PriceCart>
      <WorkFlowBanner></WorkFlowBanner>
      <Footer></Footer>
    </div>
  );
};

export default Root;
