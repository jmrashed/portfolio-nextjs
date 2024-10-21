"use client";
import React from 'react';

const NodeJsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">My Journey with Node.js</h1>

      {/* Years of Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience: 3 Years in Node.js Development</h2>
        <p className="text-lg">
          I've been working with Node.js for the past 3 years, starting in 2021. During this time, I’ve built scalable backend services, worked with real-time applications, and employed frameworks like Express, Fastify, and NestJS to deliver robust web APIs.
        </p>
      </section>

      {/* Why I Learned Node.js */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why I Learned Node.js</h2>
        <p className="text-lg">
          I began learning Node.js to leverage JavaScript on both the frontend and backend. Its non-blocking I/O model makes it a perfect fit for real-time applications like chat, gaming, and event-driven systems. I chose it for its simplicity in writing asynchronous code and for the large ecosystem of modules available via npm.
        </p>
        <p className="text-lg">
          With Node.js, I can write high-performance applications that scale easily, making it an essential tool in my development stack.
        </p>
      </section>

      {/* Top 5 Node.js Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Top 5 Node.js Projects</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Real-time Collaboration Tool for Teams (2023)</li>
          <li>E-commerce Platform with Microservices (2022)</li>
          <li>Real-time Chat Application (2021)</li>
          <li>API Gateway for IoT Devices (2023)</li>
          <li>Fintech App for Payment Processing (2022)</li>
        </ul>
      </section>

      {/* Node.js Frameworks I Use */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Node.js Frameworks I Use and Why</h2>

        {/* Express */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Express</h3>
          <p className="text-lg">
            Express is my go-to framework for building APIs quickly. It's simple, flexible, and has an extensive ecosystem of middleware, making it a powerful tool for RESTful services.
          </p>
          <p className="text-lg font-medium mt-2">Top 3 Projects using Express:</p>
          <ul className="list-disc list-inside">
            <li>Real-time Chat Application (2021)</li>
            <li>E-commerce API (2022)</li>
            <li>Inventory Management System (2023)</li>
          </ul>
        </div>

        {/* Fastify */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Fastify</h3>
          <p className="text-lg">
            Fastify is ideal for high-performance, low-latency applications. Its schema-based validation and JSON handling make it perfect for large-scale projects where performance matters.
          </p>
          <p className="text-lg font-medium mt-2">Top 2 Projects using Fastify:</p>
          <ul className="list-disc list-inside">
            <li>API Gateway for IoT Devices (2023)</li>
            <li>High-Performance Data Processing Service (2022)</li>
          </ul>
        </div>

        {/* NestJS */}
        <div>
          <h3 className="text-xl font-semibold">NestJS</h3>
          <p className="text-lg">
            NestJS's TypeScript support and modular architecture make it great for building enterprise-grade applications. Its flexibility in integrating with various databases and third-party libraries makes it a solid choice for complex projects.
          </p>
          <p className="text-lg font-medium mt-2">Top Project using NestJS:</p>
          <ul className="list-disc list-inside">
            <li>Fintech App for Payment Processing (2022)</li>
          </ul>
        </div>
      </section>

      {/* Advantages and Disadvantages */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advantages and Disadvantages of Working with Node.js</h2>

        {/* Advantages */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Advantages</h3>
          <ul className="list-disc list-inside text-lg">
            <li>Asynchronous, non-blocking I/O makes it excellent for real-time applications.</li>
            <li>Full-stack JavaScript allows code reuse between client and server.</li>
            <li>Large ecosystem and community support via npm.</li>
            <li>Highly scalable for microservices architectures.</li>
          </ul>
        </div>

        {/* Disadvantages */}
        <div>
          <h3 className="text-xl font-semibold">Disadvantages</h3>
          <ul className="list-disc list-inside text-lg">
            <li>Single-threaded nature can limit performance for CPU-bound tasks.</li>
            <li>Callback hell and promise chaining can make code difficult to manage.</li>
            <li>Fast-moving ecosystem can lead to frequent breaking changes.</li>
          </ul>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Node.js Usage Statistics</h2>
        <div className="text-lg">
          <p><strong>Years of Experience:</strong> 3 years</p>
          <p><strong>Total Projects:</strong> 5 completed Node.js projects</p>
          <p><strong>Frameworks Used:</strong> Express, Fastify, NestJS</p>
          <p><strong>Industries Served:</strong> E-commerce, IoT, Fintech</p>
          <p><strong>Percentage of Projects in Express:</strong> 60%</p>
          <p><strong>Average Project Duration:</strong> 4-6 months</p>
        </div>
      </section>
    </div>
  );
};

export default NodeJsPage;
