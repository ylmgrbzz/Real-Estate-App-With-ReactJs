import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Son Eklenen Emlaklar"
            subtitle="Yeni eklenen emlakları keşfedin. İhtiyaçlarınıza uygun bir ev veya işyeri mi arıyorsunuz? Son eklenen emlaklarımızı gözden geçirin ve hayalinizdeki mülkü bulun."
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
