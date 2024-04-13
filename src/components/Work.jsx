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
      "During my internship at this startup, I gained experience as a web developer and technical assistant.  My first project involved building a radio player using Triton Digital (whose documentation could definitely be improved). I also had the chance to learn about monitoring APIs.  Their website was built with AngularJS, a framework that's no longer actively supported, the experience definitely helped me develop one of the most important soft skills: patience!  On the bright side, I learned a lot from the senior developer about Git and programming logic, which has been incredibly helpful.",
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
