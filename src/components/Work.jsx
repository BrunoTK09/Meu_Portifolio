import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Merola Informatica",
    duration: "x months",
    details:
      'I had the pleasure of working at this family-owned company, composed of a father and son. I participated in the front-end development of the website "Onde Sanca", where I learned a lot about the real-world functionality of PHP, databases, APIs, React, Vite and other technologies. I consider this experience to be the best working experience I have ever had, and in the future, I hope to have more opportunities to carry out other projects with this team.',
  },
  {
    year: 2023,
    title: "NextDial",
    duration: "4 months",
    details:
      "During my internship at this startup, I gained experience as both a web developer and technical assistant. My first project here involved building a radio player using the Triton Digital® Player SDK from Triton Digital. This was a challenge due to what I’d consider poor documentation, but I persevered. Another one of my projects was working on NextDial’s website, which was built using AngularJS; a framework that is no longer being actively supported. The experience working with the website was challenging as well, but overall has helped me further develop one of the most important soft skills: patience! On a more positive note, I did learn a lot from the senior developer about Git and programming logic, as well as API monitoring.",
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
