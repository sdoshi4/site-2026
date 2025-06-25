import React, { useState } from 'react';
import Content from "@/content";
import { Fragment } from 'react';
import Faqs from "layouts/FAQs/index.js";


export default function FaqPage() {
    return (
        <div className="flex flex-col">
            <Content>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 font-heading">
                    Frequently Asked Questions (FAQs)
                </h2>
                <Faqs />
            </Content>
        </div>
    );
}

// export default function FaqPage() {
//     // State to track open FAQ
//     const [openFAQ, setOpenFAQ] = useState(null);

//     const faqs = [
//         { question: "What is EOH?", answer: "Engineering Open House (EOH) is an annual event organized entirely by engineering students at the University of Illinois at Urbana-Champaign.  It is held each spring semester, and draws estimated crowds of 20,000 people including, students, teachers, parents and families, from all over Illinois (and beyond). RailTEC participates in EOH each year by working with major railroads who to set up various exhibits and displays of railroad technology." },
//         { question: "What kinds of exhibits can we expect?", answer: "We have an exhibit for every major this year! Ranging from robotic hands, solar cars, and a coffee-serving robot, to an oobleck pool and DIY plastic, we will have something for everyone to experience engineering." },
//         { question: "What kinds of special events will you have?", answer: "We will have several different kinds of events, including a Tesla Coil concert, a Startup Showcase, and prospective student panels among many others!" },
//         // Add more FAQs as needed!
//     ];

//     const toggleFAQ = (index) => {
//         setOpenFAQ(openFAQ === index ? null : index); // Toggle open/close
//     };

//     return (
//         <div className="flex flex-col">
//             <Content>
//                 <h2 className="text-2xl md:text-3xl font-bold mb-8 font-heading">
//                     Frequently Asked Questions (FAQs)
//                 </h2>
//                 {faqs.map((faq, index) => (
//                     <div key={index} className="mb-4">
//                         <button
//                             onClick={() => toggleFAQ(index)}
//                             className="w-full text-left text-lg font-medium py-2 px-4 bg-gray-200 rounded-lg focus:outline-none"
//                         >
//                             {faq.question}
//                         </button>
//                         {openFAQ === index && (
//                             <div className="mt-2 p-4 bg-gray-100 rounded-lg">
//                                 <p>{faq.answer}</p>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </Content>
//         </div>
//     );
// }
