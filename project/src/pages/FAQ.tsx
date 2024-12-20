import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Orders & Shipping',
    question: 'How long does delivery take?',
    answer: 'Standard delivery within South Africa takes 2-5 business days. Express delivery options are available for next-day delivery in major cities.',
  },
  {
    category: 'Orders & Shipping',
    question: 'What are your shipping costs?',
    answer: 'Shipping costs are calculated based on your location and the weight of the items. Free shipping is available for orders over R1000.',
  },
  {
    category: 'Orders & Shipping',
    question: 'Do you ship internationally?',
    answer: 'Currently, we only ship within South Africa. We plan to expand to neighboring countries in the future.',
  },
  {
    category: 'Products',
    question: 'Are your parts genuine?',
    answer: 'Yes, we source our parts directly from manufacturers and authorized distributors. All parts come with a warranty and guarantee of authenticity.',
  },
  {
    category: 'Products',
    question: 'What if a part doesn\'t fit my vehicle?',
    answer: 'If a part doesn\'t fit, you can return it within 30 days for a full refund or exchange. Please keep the original packaging.',
  },
  {
    category: 'Products',
    question: 'Do you offer warranties on your products?',
    answer: 'Yes, all our products come with a minimum 12-month warranty. Some products have extended warranty options available.',
  },
  {
    category: 'Returns & Refunds',
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase. Items must be unused and in original packaging. Contact our support team to initiate a return.',
  },
  {
    category: 'Returns & Refunds',
    question: 'How long do refunds take to process?',
    answer: 'Refunds are processed within 3-5 business days after we receive the returned item. The amount will be credited back to your original payment method.',
  },
  {
    category: 'Account & Orders',
    question: 'How can I track my order?',
    answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order through your account dashboard.',
  },
  {
    category: 'Account & Orders',
    question: 'Can I modify or cancel my order?',
    answer: 'Orders can be modified or cancelled within 1 hour of placement. Contact our support team immediately if you need to make changes.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#0a3042]">Frequently Asked Questions</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Find answers to common questions about our products, services, shipping, and more.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-[#64ee85] text-[#0a3042]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        {filteredFaqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.includes(index)}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="mt-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-[#0a3042]">Still Have Questions?</h2>
        <p className="mb-6 text-gray-600">
          Can't find the answer you're looking for? Please contact our support team.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-md bg-[#64ee85] px-6 py-3 text-[#0a3042] hover:bg-[#64ee85]/90"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
