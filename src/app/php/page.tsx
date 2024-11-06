"use client";
import React from 'react';

const PhpPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-6">My Journey with PHP</h1>

      {/* Years of Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience: 10 Years in PHP Development</h2>
        <p className="">
          I have been working with PHP for the last 10 years, starting in 2014. Over the past decade, I have developed various web applications, improved my skills in backend and frontend development, and extensively used frameworks like Laravel, CakePHP, and CodeIgniter.
        </p>
      </section>

      {/* Why I Learned PHP */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why I Learned PHP</h2>
        <p className="">
          I started learning PHP because it was the most widely used server-side language for web development at the time. Its flexibility, ease of learning, and the vast ecosystem of frameworks and libraries made it a great choice for building scalable web applications.
        </p>
        <p className="">
          PHP continues to be an excellent option for developers today because of its robust community support and ease of integration with various databases. It remains a solid choice for full-stack development, especially when working on tight deadlines.
        </p>
      </section>

      {/* Top 10 Laravel Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Top 10 PHP Projects Using Laravel</h2>
        <ul className="list-disc list-inside ">
          <li>E-commerce Platform for Fashion Retailers (2022)</li>
          <li>Custom CRM System for Small Businesses (2021)</li>
          <li>Online Learning Management System (2020)</li>
          <li>Real-time Project Management Tool (2019)</li>
          <li>Event Ticketing Platform (2018)</li>
          <li>Healthcare Appointment Scheduling System (2021)</li>
          <li>Inventory Management and Point of Sale System (2019)</li>
          <li>News Portal with Multi-Language Support (2020)</li>
          <li>Social Networking Platform for Professionals (2018)</li>
          <li>Custom CMS for a Local News Agency (2017)</li>
        </ul>
      </section>

      {/* PHP Frameworks I Know */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">PHP Frameworks I Use and Why</h2>

        {/* Laravel */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Laravel</h3>
          <p className="">
            Laravel is my go-to framework for modern PHP development. Its expressive syntax, built-in authentication, and MVC architecture make it an excellent choice for large-scale applications.
          </p>
          <p className=" font-medium mt-2">Top 3 Projects using Laravel:</p>
          <ul className="list-disc list-inside">
            <li>Online Store for Custom Apparel (2022)</li>
            <li>Enterprise HR Management Tool (2020)</li>
            <li>School Management System with API Integration (2021)</li>
          </ul>
        </div>

        {/* CodeIgniter */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">CodeIgniter</h3>
          <p className="">
            CodeIgniter is lightweight and fast. It's perfect for applications that require speed and efficiency without the overhead of more complex frameworks.
          </p>
          <p className=" font-medium mt-2">Top 3 Projects using CodeIgniter:</p>
          <ul className="list-disc list-inside">
            <li>Job Portal for Freelancers (2018)</li>
            <li>Student Information System (2017)</li>
            <li>Small Business Inventory Management (2019)</li>
          </ul>
        </div>

        {/* CakePHP */}
        <div>
          <h3 className="text-xl font-semibold">CakePHP</h3>
          <p className="">
            CakePHP is great for rapid application development with convention over configuration. Its strong ORM and bake tool make it ideal for CRUD operations.
          </p>
          <p className=" font-medium mt-2">Top 3 Projects using CakePHP:</p>
          <ul className="list-disc list-inside">
            <li>NGO Fund Management System (2016)</li>
            <li>Online Donation Platform (2017)</li>
            <li>Real Estate Property Listing (2018)</li>
          </ul>
        </div>
      </section>

      {/* Advantages and Disadvantages */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advantages and Disadvantages of Working with PHP</h2>

        {/* Advantages */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Advantages</h3>
          <ul className="list-disc list-inside ">
            <li>Wide range of hosting options.</li>
            <li>Vast number of libraries and frameworks.</li>
            <li>Great for beginners due to simplicity.</li>
            <li>Strong community support and documentation.</li>
            <li>Flexible and easy to integrate with various databases.</li>
          </ul>
        </div>

        {/* Disadvantages */}
        <div>
          <h3 className="text-xl font-semibold">Disadvantages</h3>
          <ul className="list-disc list-inside ">
            <li>Can be slower compared to newer technologies like Node.js or Python for certain tasks.</li>
            <li>Older versions of PHP had poor security practices, leading to a bad reputation.</li>
            <li>Not as modern or developer-friendly as some emerging server-side languages.</li>
            <li>Managing large codebases in plain PHP can be cumbersome without a framework.</li>
          </ul>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">PHP Usage Statistics</h2>
        <div className="">
          <p><strong>Years of Experience:</strong> 10 years</p>
          <p><strong>Total Projects:</strong> 50+ completed PHP projects</p>
          <p><strong>Frameworks Used:</strong> Laravel, CakePHP, CodeIgniter</p>
          <p><strong>Major Industries Served:</strong> E-commerce, Education, Healthcare, Real Estate</p>
          <p><strong>Percentage of Projects in Laravel:</strong> 70%</p>
          <p><strong>Average Project Duration:</strong> 3-6 months</p>
        </div>
      </section>
    </div>
  );
};

export default PhpPage;
