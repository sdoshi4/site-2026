import React from 'react';
import useSWR from 'swr';
import { useState } from 'react';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

const colors = ['bg-blue-300', 'bg-pink-300', 'bg-yellow-200', 'bg-red-300', 'bg-purple-300']

const ErrorMessageBox = ({ message, onRetry }) => (
  <div style={{ margin: '20px', padding: '20px', backgroundColor: '#ffcccc', color: '#cc0000', borderRadius: '5px', textAlign: 'center' }}>
    <p>{message}</p>
    {onRetry && (
      <button onClick={onRetry} style={{ marginTop: '10px', padding: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#f2f2f2', border: 'none', borderRadius: '5px' }}>
        Retry
      </button>
    )}
  </div>
)

const Faqs = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const [expandedId, setExpandedId] = useState(null);

  const { data, error, isLoading } = useSWR(
    `https://n11.eohillinois.org/api/faqs?sort=updatedAt:desc`,
    fetcher
  );

  const [categories, setCategories] = useState({
    'Event FAQs': [],
    'Parking FAQs': [],
    'Food FAQs': [],
    'Emergency FAQs': [],
  });

  React.useEffect(() => {
    if (data && data.data) {
      const sortedFaqs = data.data.reduce((acc, faq) => {
        const { Category, Question, Description } = faq;
        const faqItem = { id: Question, title: Question, content: Description };
        if (!acc[Category]) {
          acc[Category] = [faqItem];
        } else {
          acc[Category].push(faqItem);
        }
        return acc;
      }, {});

      setCategories(sortedFaqs);
    }
  }, [data]);

  const categoryOrder = ['Event FAQs', 'Parking FAQs', 'Food FAQs', 'Emergency FAQs'];

  const replaceWithBr = (str) => {
    return str.replace(/\n/g, "<br />")
  }

  if (error) {
    return <ErrorMessageBox message="failed to load, retry" onRetry={() => window.location.reload()} />;
  }

  if (!data) return <div style={{ textAlign: 'center' }}>Loading...</div>;

  return (
    <div className="mt-15 md:mt-18 flex flex-col justify-between">
      {categoryOrder.map((category, idx) => {
        const faqs = categories[category] || [];
        return (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{category}</h3>
            <div className="flex flex-col gap-4 ">
              {faqs.map((faq) => (
                <button key={faq.id} className={`p-5 ${colors[idx % colors.length]} rounded-md border hover:bg-opacity-80`}
                  onClick={() => { if (expandedId == faq.id) { setExpandedId(null) } else setExpandedId(faq.id) }}>
                  <h4 className="font-semibold text-lg md:text-xl text-left">{faq.title}</h4>
                  {expandedId == faq.id &&
                    <p className="text-sm text-black text-left mt-2"
                      dangerouslySetInnerHTML={{ __html: replaceWithBr(faq.content) }}></p>
                  }
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

}

export default Faqs;

