// src/app/about/page.tsx
"use client";
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hey there! I'm MD RASHEDUZZAMAN, your friendly neighborhood software developer. With over 10 years of wrestling with code, I’ve picked up a few tricks along the way, mainly in PHP, Node.js, Python, and JavaScript. They say learning never stops, and I'm here for it!
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">A Bit About My Life</h2>
      <p className="mb-4">
        I’m lucky to share my life with my beautiful wife, Asmaa Al-Husna, and our two adorable daughters. They keep me on my toes and remind me to take breaks from staring at screens (which is harder than it sounds!). Family time is my jam, whether we’re binge-watching cartoons or going on spontaneous adventures.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">University Life</h2>
      <p className="mb-4">
        University was a whirlwind of late-night coding sessions and caffeine-fueled study marathons. I made lifelong friends and discovered my love for programming. Between lectures and labs, I joined clubs, participated in hackathons, and learned the importance of collaboration (and good snacks).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Programming Contest Life</h2>
      <p className="mb-4">
        Ah, the adrenaline of programming contests! There’s nothing quite like the thrill of racing against the clock to solve mind-bending problems. I spent countless weekends huddled with friends, debugging code, and celebrating small victories. These experiences taught me not only about algorithms but also how to handle pressure like a pro!
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">New Job Life</h2>
      <p className="mb-4">
        Starting my first job was both exciting and nerve-wracking. I went from student to professional overnight! The learning curve was steep, but I was eager to absorb everything like a sponge. I learned the ropes of working in a team, meeting deadlines, and the importance of a good work-life balance (thank you, coffee breaks!).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Professional Job Life</h2>
      <p className="mb-4">
        Fast forward to today, and I’ve built a career that I genuinely enjoy. Each project presents new challenges, and I thrive on finding innovative solutions. From collaborating with designers to navigating client expectations, my professional life is a mix of creativity and technical prowess. Plus, I’ve made some fantastic friends along the way!
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">My Tech Toolbox</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>PHP, Laravel, CodeIgniter</li>
        <li>Node.js, Express, Fastify</li>
        <li>Python, FastAPI, Flask</li>
        <li>JavaScript, jQuery, React</li>
        <li>MySQL, NoSQL</li>
        <li>REST API, GraphQL</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Why I Love Coding</h2>
      <p className="mb-4">
        Coding is like solving a puzzle, and I’m addicted to it! There's something incredibly satisfying about taking a jumble of code and transforming it into something functional. Plus, there’s always a new framework or language to play with, which keeps things exciting. Who knew work could be this much fun?
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">My Journey So Far</h2>
      <p className="mb-4">
        Over the years, I’ve worked on everything from tiny pet projects to massive applications. I believe in writing code that even my future self can read (and not cringe at!). My goal is to create efficient and user-friendly apps that make life a little easier for everyone.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Let’s Connect!</h2>
      <p>
        If you want to chat about tech, parenting, or life in general, feel free to shoot me an email at <a href="mailto:jmrashed@gmail.com" className="text-blue-500 hover:text-blue-700">jmrashed@gmail.com</a> or hit me up on <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">LinkedIn</a>. I’m always up for a good conversation!
      </p>
    </div>
  );
};

export default About;
