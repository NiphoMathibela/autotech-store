import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-[#0a3042]">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Last updated: December 20, 2024
          </p>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">1. Introduction</h2>
            <p className="text-gray-600">
              AutoTech Spares ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website and use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">2. Information We Collect</h2>
            <h3 className="mb-2 text-xl font-semibold">Personal Information</h3>
            <p className="mb-4 text-gray-600">
              We may collect personal information that you provide to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Vehicle information</li>
            </ul>

            <h3 className="mb-2 mt-4 text-xl font-semibold">Automatically Collected Information</h3>
            <p className="mb-4 text-gray-600">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Usage data</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">3. How We Use Your Information</h2>
            <p className="mb-4 text-gray-600">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Processing and fulfilling your orders</li>
              <li>Communicating with you about your orders</li>
              <li>Providing customer support</li>
              <li>Sending promotional emails (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Analyzing usage patterns</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">4. Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell or rent your personal information to third parties. We may share your 
              information with trusted service providers who assist us in operating our website, 
              conducting our business, or servicing you.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">5. Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to maintain the security 
              of your personal information. However, no method of transmission over the Internet or 
              electronic storage is 100% secure.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">6. Your Rights</h2>
            <p className="mb-4 text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">7. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:<br />
              Email: privacy@autotechspares.co.za<br />
              Phone: +27 (011) 123-4567<br />
              Address: 123 Main Street, Johannesburg, 2000, South Africa
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
