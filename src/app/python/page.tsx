"use client";
import React from 'react';

const PythonPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">My Journey with Python</h1>

      {/* Years of Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience: 2 Years in Python Development</h2>
        <p className="text-lg">
          I have been working with Python for the last 2 years, starting in 2022. During this time, I've developed a range of projects focusing on backend APIs, data analysis, and automation, leveraging frameworks like FastAPI, Flask, and Django.
        </p>
      </section>

      {/* Why I Learned Python */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why I Learned Python</h2>
        <p className="text-lg">
          I chose to learn Python due to its simplicity, readability, and its wide range of use cases, including web development, automation, and data science. Its strong community and large collection of libraries make it incredibly versatile. 
        </p>
        <p className="text-lg">
          Whether building APIs, automating workflows, or processing data, Python has become a fundamental part of my toolkit due to its ease of use and efficiency.
        </p>
      </section>

      {/* Top 4 Python Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Top 4 Python Projects</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Data Analytics Dashboard with Django (2023)</li>
          <li>Automated Web Scraper for Market Research (2022)</li>
          <li>API for Mobile Application (FastAPI) (2023)</li>
          <li>Machine Learning Model for Predictive Analysis (2023)</li>
        </ul>
      </section>

      {/* Python Frameworks I Use */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Python Frameworks I Use and Why</h2>

        {/* FastAPI */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">FastAPI</h3>
          <p className="text-lg">
            FastAPI is my preferred choice for building modern web APIs. It's fast, intuitive, and well-suited for asynchronous operations, making it ideal for building highly performant and scalable applications.
          </p>
          <p className="text-lg font-medium mt-2">Top Project using FastAPI:</p>
          <ul className="list-disc list-inside">
            <li>API for Mobile Application (2023)</li>
          </ul>
        </div>

        {/* Flask */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Flask</h3>
          <p className="text-lg">
            Flask’s lightweight nature makes it perfect for microservices or small web applications. I use it when I need flexibility and control without the overhead of a full-stack framework like Django.
          </p>
          <p className="text-lg font-medium mt-2">Top Project using Flask:</p>
          <ul className="list-disc list-inside">
            <li>Automated Web Scraper for Market Research (2022)</li>
          </ul>
        </div>

        {/* Django */}
        <div>
          <h3 className="text-xl font-semibold">Django</h3>
          <p className="text-lg">
            Django is a full-stack framework with batteries included, perfect for rapid development. Its powerful ORM and built-in admin panel make it ideal for complex applications.
          </p>
          <p className="text-lg font-medium mt-2">Top Project using Django:</p>
          <ul className="list-disc list-inside">
            <li>Data Analytics Dashboard (2023)</li>
          </ul>
        </div>
      </section>

      {/* Python Libraries I Use */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Python Libraries I Use</h2>
        <p className="text-lg">
          Over the past 2 years, I have worked extensively with several Python libraries to support various use cases like data manipulation, machine learning, and API integrations.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Pandas</h3>
          <p className="text-lg">
            I use Pandas for efficient data manipulation and analysis. It provides powerful data structures like DataFrames, allowing me to handle large datasets with ease.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">NumPy</h3>
          <p className="text-lg">
            NumPy is essential for numerical computations, particularly in machine learning projects where I need to perform matrix operations, array manipulations, and more.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">BeautifulSoup</h3>
          <p className="text-lg">
            For web scraping, BeautifulSoup makes it easy to parse HTML and XML documents. It's been invaluable in building automated scrapers for research projects.
          </p>
        </div>
      </section>

      {/* Advantages and Disadvantages */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advantages and Disadvantages of Working with Python</h2>

        {/* Advantages */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Advantages</h3>
          <ul className="list-disc list-inside text-lg">
            <li>Simple syntax and readability, making it easy to learn and use.</li>
            <li>Extensive libraries and frameworks for web development, data science, and automation.</li>
            <li>Strong community support and active development ecosystem.</li>
          </ul>
        </div>

        {/* Disadvantages */}
        <div>
          <h3 className="text-xl font-semibold">Disadvantages</h3>
          <ul className="list-disc list-inside text-lg">
            <li>Slower performance compared to languages like C++ or Java in CPU-bound tasks.</li>
            <li>Global Interpreter Lock (GIL) can hinder multi-threading in some cases.</li>
            <li>Not the best choice for mobile app development.</li>
          </ul>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Python Usage Statistics</h2>
        <div className="text-lg">
          <p><strong>Years of Experience:</strong> 2 years</p>
          <p><strong>Total Projects:</strong> 4 completed Python projects</p>
          <p><strong>Frameworks Used:</strong> FastAPI, Flask, Django</p>
          <p><strong>Key Libraries:</strong> Pandas, NumPy, BeautifulSoup</p>
          <p><strong>Industries Served:</strong> Data Analytics, Automation, Mobile API Development</p>
          <p><strong>Average Project Duration:</strong> 3-5 months</p>
        </div>
      </section>
    </div>
  );
};

export default PythonPage;
