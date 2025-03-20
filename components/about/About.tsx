"use client";
import { useState } from "react";
import AboutGlobeAnimate from "./AboutGlobeAnimate";
import AnimateParagraph from "./AnimateParagraph";
import AnimateTitle from "./AnimateTitle";
import GithubGraph from "./GithubGraph";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

const tech = [
  { id: 1, name: "Python", imageUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" },
  { id: 2, name: "R", imageUrl: "https://cdn-icons-png.flaticon.com/128/2103/2103665.png" },
  { id: 3, name: "Google Sheets", imageUrl: "https://cdn-icons-png.flaticon.com/128/2504/2504768.png" },
  { id: 4, name: "Excel", imageUrl: "https://cdn-icons-png.flaticon.com/128/732/732220.png" },
  { id: 5, name: "Tableau", imageUrl: "https://img.icons8.com/?size=48&id=9Kvi1p1F0tUo&format=png" },
  { id: 6, name: "Looker Studio", imageUrl: "https://img.icons8.com/?size=48&id=SruJhzn0nnLl&format=png" },
  { id: 7, name: "SQL", imageUrl: "https://cdn-icons-png.flaticon.com/128/2772/2772128.png" },
  { id: 8, name: "HTML", imageUrl: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png" },
  { id: 9, name: "C/C++", imageUrl: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png" },
  { id: 10, name: "Java", imageUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png" },
  { id: 11, name: "CSS", imageUrl: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
  { id: 12, name: "Power BI", imageUrl: "https://img.icons8.com/?size=64&id=70667&format=png" }
];

const tools = [
  { id: 1, name: "Scikit Learn", imageUrl: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg" },
  { id: 2, name: "Pandas", imageUrl: "https://img.icons8.com/?size=48&id=xSkewUSqtErH&format=png" },
  { id: 3, name: "NumPy", imageUrl: "https://img.icons8.com/?size=48&id=aR9CXyMagKIS&format=png" },
  { id: 4, name: "Matplotlib", imageUrl: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg" },
  { id: 5, name: "Seaborn", imageUrl: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
  { id: 6, name: "tidyverse", imageUrl: "https://tidyverse.tidyverse.org/logo.png" },
  { id: 7, name: "ggplot2", imageUrl: "https://ggplot2.tidyverse.org/logo.png" },
  { id: 8, name: "plotly", imageUrl: "https://avatars.githubusercontent.com/u/5997976?s=280&v=4" },
  { id: 9, name: "lubridate", imageUrl: "https://rstudio.github.io/cheatsheets/html/images/logo-lubridate.png" },
  { id: 10, name: "mlr3", imageUrl: "https://mlr3.mlr-org.com/logo.svg" },
  { id: 11, name: "tensorflow", imageUrl: "https://img.icons8.com/?size=48&id=n3QRpDA7KZ7P&format=png" },
  { id: 12, name: "keras", imageUrl: "https://icon.icepanel.io/Technology/svg/Keras.svg" },
  { id: 13, name: "Streamlit", imageUrl: "https://img.icons8.com/?size=48&id=Rffi8qeb2fK5&format=png" },
  { id: 14, name: "Shiny", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Shiny_hex_logo.svg/1200px-Shiny_hex_logo.svg.png" },
  { id: 15, name: "PyTorch", imageUrl: "https://icon.icepanel.io/Technology/svg/PyTorch.svg" },
  { id: 16, name: "SciPy", imageUrl: "https://scipy.org/images/logo.svg" }
];

export default function About() {
  const [activeTab, setActiveTab] = useState("tech");

  const renderSkills = (data: { id: number; name: string; imageUrl: string }[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.id} className="flex items-center gap-3 border border-zinc-600 p-4 rounded-lg hover:bg-zinc-800 transition">
          <Image src={item.imageUrl} alt={item.name} width={48} height={48} className="object-contain w-12 h-12" />
          <p className="text-white font-medium">{item.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section id="about" className="relative py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="mb-10 flex w-full items-center justify-between gap-x-2">
        <AnimateTitle
          title={"About me"}
          className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.0001em]"
        />
        <AboutGlobeAnimate />
      </div>

      <div className="text-lg text-white leading-relaxed font-medium space-y-4 mb-10">
        <AnimateParagraph paragraph="Hey there! Hi, I'm Rafif, and I'm a 23-year-old data science explorer." delay={1.5} />
        <AnimateParagraph paragraph="I attended Binus University for my Bachelor of Computer Science and have since taken courses at Purwadhika and Algoritma Data Science School to hone my skills in data science and business intelligence.  My background in data science and BI was solidified through these courses." delay={1.8} />
        <AnimateParagraph paragraph="Strong abilities in data visualization, predictive analytics, modeling, and data-driven decision-making complement my proficiency in R, Python, SQL, and Excel." delay={2} />
        <AnimateParagraph paragraph="To further assist individuals and businesses in obtaining insightful data, I am highly skilled at developing interactive, user-friendly dashboards, improving data processing, and simplifying workflows." delay={2.5} />
      </div>

      <div className="flex mb-6 space-x-4 border-b border-zinc-600 text-white text-sm">
        <button onClick={() => setActiveTab("tech")} className={`px-4 py-2 rounded-t ${activeTab === "tech" ? "bg-zinc-600 text-white font-bold" : "hover:text-zinc-300"}`}>Tech Stack</button>
        <button onClick={() => setActiveTab("tools")} className={`px-4 py-2 rounded-t ${activeTab === "tools" ? "bg-zinc-600 text-white font-bold" : "hover:text-zinc-300"}`}>Library</button>
      </div>

      {activeTab === "tech" && renderSkills(tech)}
      {activeTab === "tools" && renderSkills(tools)}

      <div className="mt-12 flex flex-col gap-6">
        <GithubGraph />
        <SocialMedia />
      </div>
    </section>
  );
}