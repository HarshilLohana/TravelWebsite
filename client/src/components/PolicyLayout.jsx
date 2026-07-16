import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

// Shared layout for legal/policy pages
// Usage: <PolicyLayout title="..." canonical="..." description="..." lastUpdated="...">content</PolicyLayout>
export default function PolicyLayout({ title, description, canonical, lastUpdated, children }) {
  return (
    <>
      <Helmet>
        <title>{title} | Arabian Amenity Travels</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0d1a]">{title}</h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9a84c]" />
          <p className="text-gray-500 mt-3 text-sm">
            Arabian Amenity Travel LLC · Last updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Content card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
          {children}
        </div>
      </div>
    </>
  );
}

// Reusable section pieces
export const PolicySection = ({ heading, children }) => (
  <section className="mb-8 last:mb-0">
    {heading && (
      <h2 className="text-lg md:text-xl font-bold text-[#0a0d1a] mb-3 border-l-4 border-[#c9a84c] pl-3">
        {heading}
      </h2>
    )}
    {children}
  </section>
);

export const P = ({ children }) => (
  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3 last:mb-0">
    {children}
  </p>
);