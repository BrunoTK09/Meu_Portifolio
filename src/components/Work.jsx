import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Merola Informatica",
    duration: "x months",
    details:
      'I had the pleasure of working at this family-owned company, composed of a father and son. I participated in the development of the front-end of the website "Onde Sanca", learning a lot about the real functioning of PHP, database, back-end, APIs, React, Vite and other technologies. I consider this experience to be the best I have ever had and I hope to have the opportunity to carry out other projects with this team.',
  },
  {
    year: 2023,
    title: "NextDial",
    duration: "4 months",
    details:
      "I interned at this start-up as a web developer and technical assistant. I started by developing a radio player using Triton Digital (worst documentation I have ever seen) and monitoring APIs. After that, I went to their website, made in one of the worst languages I have ever seen and used, AngularJS, discontinued in 2021. There I learned the best soft skill on the market: patience. Although I learned a lot from their senior about Git and programming logic",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
