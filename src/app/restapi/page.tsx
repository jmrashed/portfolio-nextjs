"use client";
import React from 'react';

const RESTAPIPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">My Journey with REST APIs</h1>

      {/* Years of Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience: 4-5 Years with REST APIs</h2>
        <p className="text-lg">
          I have been working with REST APIs for the past 4 to 5 years, implementing them in various projects to enable efficient communication between clients and servers. Their stateless nature and simplicity have made them a reliable choice for web services.
        </p>
      </section>

      {/* What is REST API? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a REST API?</h2>
        <p className="text-lg">
          A REST API (Representational State Transfer Application Programming Interface) is a set of rules and conventions for building and interacting with web services. It allows different software applications to communicate over HTTP using standard methods like GET, POST, PUT, and DELETE.
        </p>
      </section>

      {/* Why People Use REST APIs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why People Use REST APIs</h2>
        <p className="text-lg">
          Developers and organizations prefer REST APIs for their simplicity, scalability, and flexibility. REST APIs are platform-agnostic, meaning they can be used across various devices and programming languages, making them ideal for modern web and mobile applications.
        </p>
      </section>

      {/* Why I Use REST APIs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why I Use REST APIs</h2>
        <p className="text-lg">
          I use REST APIs due to their straightforward design and ease of use. They allow for stateless interactions, which simplify server design and make scaling applications more manageable. Furthermore, their compatibility with various data formats, including JSON and XML, makes them versatile for different client requirements.
        </p>
      </section>

      {/* Differentiation from Other APIs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Difference Between REST and Other APIs</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>REST vs. SOAP:</strong> REST is stateless and operates over standard HTTP, while SOAP (Simple Object Access Protocol) is more complex and requires XML messaging, making REST simpler and more accessible for web services.
          </li>
          <li>
            <strong>REST vs. GraphQL:</strong> REST has multiple endpoints for different resources, whereas GraphQL allows clients to request only the data they need from a single endpoint, providing more flexibility but requiring a more complex setup.
          </li>
          <li>
            <strong>REST vs. gRPC:</strong> REST is more widely used for web applications due to its simplicity and human-readable format, while gRPC is geared toward high-performance communication between services and may require additional configuration.
          </li>
        </ul>
      </section>

      {/* When to Suggest REST APIs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">When to Suggest REST APIs</h2>
        <p className="text-lg">
          I suggest using REST APIs when:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Building web and mobile applications that require easy integration with third-party services.</li>
          <li>Developing applications that need to be stateless and scalable, allowing for easier load balancing and horizontal scaling.</li>
          <li>When you want a simple interface for CRUD (Create, Read, Update, Delete) operations, as REST provides a clear structure for these actions.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg">
          In summary, my experience with REST APIs has been invaluable in creating efficient, scalable applications. Their simplicity and flexibility make them a preferred choice for many development projects, allowing me to deliver robust solutions that meet client needs effectively.
        </p>
      </section>
    </div>
  );
};

export default RESTAPIPage;
