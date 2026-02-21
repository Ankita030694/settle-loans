import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTriangleExclamation, faCheck } from "@fortawesome/free-solid-svg-icons";

interface Review {
    name: string;
    loc: string;
    loan: string;
    res: string;
    story: string;
}

interface ReviewSnippetsProps {
    reviews: Review[];
    title?: string;
}

const ReviewSnippets: React.FC<ReviewSnippetsProps> = ({ reviews, title = "Client Success Stories" }) => {
    return (
        <section className="mt-16 mb-16">
            <h2 id="reviews" className="scroll-mt-32 text-2xl md:text-4xl font-black text-[#2E2E2E] mb-8 text-center uppercase tracking-tighter font-sans">
                {title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 not-prose text-left">
                {reviews.map((review, i) => (
                    <div key={i} className="bg-white p-5 md:p-6 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#1F5EFF]/10 flex items-center justify-center font-bold text-[#1F5EFF] mr-3">
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                                <p className="text-xs text-gray-400">{review.loc}</p>
                            </div>
                            <div className="ml-auto text-yellow-400 text-sm flex gap-0.5">
                                {[...Array(5)].map((_, j) => (
                                    <FontAwesomeIcon key={j} icon={faStar} className="w-3.5 h-3.5" />
                                ))}
                            </div>
                        </div>
                        <div className="mb-4 text-xs font-mono bg-gray-50 p-2 rounded border border-gray-100">
                            <span className="block text-red-600 mb-1 flex items-center">
                                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2 w-3 h-3" />
                                {review.loan}
                            </span>
                            <span className="block text-green-600 font-bold flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 w-3 h-3" />
                                {review.res}
                            </span>
                        </div>
                        <p className="text-[15px] md:text-base text-[var(--color-text-body)] leading-relaxed italic font-medium">
                            &quot;{review.story}&quot;
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReviewSnippets;
