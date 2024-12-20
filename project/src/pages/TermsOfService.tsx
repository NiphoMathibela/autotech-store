import React from 'react';

export function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-[#0a3042]">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Last updated: December 20, 2024
          </p>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">1. Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing and using AutoTech Spares' website and services, you agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">2. Use of Services</h2>
            <h3 className="mb-2 text-xl font-semibold">2.1 Account Registration</h3>
            <p className="mb-4 text-gray-600">
              To access certain features of our website, you may need to create an account. 
              You are responsible for maintaining the confidentiality of your account information 
              and for all activities under your account.
            </p>

            <h3 className="mb-2 text-xl font-semibold">2.2 Acceptable Use</h3>
            <p className="mb-4 text-gray-600">
              You agree to use our services only for lawful purposes and in accordance with these Terms.
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Use the services in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
              <li>Engage in fraudulent activities</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">3. Products and Orders</h2>
            <h3 className="mb-2 text-xl font-semibold">3.1 Product Information</h3>
            <p className="mb-4 text-gray-600">
              We strive to provide accurate product information, but we do not warrant that product 
              descriptions or prices are accurate, complete, or current.
            </p>

            <h3 className="mb-2 text-xl font-semibold">3.2 Order Acceptance</h3>
            <p className="text-gray-600">
              Your order constitutes an offer to purchase. We reserve the right to accept or decline 
              your order for any reason.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">4. Shipping and Returns</h2>
            <p className="mb-4 text-gray-600">
              For detailed information about our shipping and returns policies, please refer to our 
              Shipping & Returns page. By making a purchase, you agree to be bound by these policies.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">5. Warranties and Disclaimers</h2>
            <p className="mb-4 text-gray-600">
              Products are covered by manufacturer warranties as specified in product descriptions. 
              We make no additional warranties or representations about the products sold on our website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, AutoTech Spares shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your 
              use of our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">7. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. We will notify users of any 
              material changes via email or through our website.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">8. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms, please contact us at:<br />
              Email: legal@autotechspares.co.za<br />
              Phone: +27 (011) 123-4567<br />
              Address: 123 Main Street, Johannesburg, 2000, South Africa
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
