"use client";
import React from 'react';

const NoSQLPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">My Journey with NoSQL Databases</h1>

      {/* Years of Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience: 2 Years in NoSQL</h2>
        <p className="">
          I have been working with NoSQL databases for the past 2 years, utilizing their flexible data models to meet the dynamic needs of modern applications. NoSQL has allowed me to manage unstructured data efficiently, providing the scalability required for large datasets.
        </p>
      </section>

      {/* What is NoSQL? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is NoSQL?</h2>
        <p className="">
          NoSQL refers to a category of database management systems that do not use the traditional relational database structure. Instead, they offer flexible schemas, allowing for the storage and retrieval of data in various formats such as document, key-value, wide-column, and graph.
        </p>
      </section>

      {/* Why I Use NoSQL */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why I Use NoSQL?</h2>
        <p className="">
          I use NoSQL databases for their ability to handle large volumes of unstructured data, their horizontal scalability, and their suitability for real-time applications. The flexibility in data modeling allows me to adapt to changing requirements easily, making NoSQL a valuable tool in my development toolkit.
        </p>
      </section>

      {/* Advantages of NoSQL */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advantages of NoSQL</h2>
        <ul className="list-disc list-inside ">
          <li><strong>Scalability:</strong> NoSQL databases can be scaled horizontally, accommodating an increasing amount of data and users effortlessly.</li>
          <li><strong>Flexibility:</strong> They allow for dynamic schemas, enabling developers to store different types of data without needing predefined structures.</li>
          <li><strong>Performance:</strong> NoSQL databases can provide faster read and write operations for large volumes of data compared to traditional relational databases.</li>
        </ul>
      </section>

      {/* Disadvantages of NoSQL */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Disadvantages of NoSQL</h2>
        <ul className="list-disc list-inside ">
          <li>Some NoSQL databases lack the ACID (Atomicity, Consistency, Isolation, Durability) compliance found in traditional RDBMS.</li>
          <li>The absence of a standardized query language may lead to a steeper learning curve and potential inconsistency across different NoSQL systems.</li>
          <li>NoSQL databases may not be the best choice for applications that require complex joins or transactions.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="">
          In conclusion, my experience with NoSQL databases has been instrumental in handling unstructured data and scaling applications. Their flexibility, performance, and scalability make them an excellent choice for modern development needs, allowing me to create efficient and responsive applications.
        </p>
      </section>
    </div>
  );
};

export default NoSQLPage;
