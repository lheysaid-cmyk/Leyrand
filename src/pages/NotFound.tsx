// import React from 'react'

import HerosectionComponent from "@/components/shared/HerosectionComponent";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Not Found | Leyrand</title>
        <meta
          name="description"
          content="Welcome to our law firm's homepage."
        />
        <meta property="og:title" content="Home | Leyrand" />
      </Helmet>
      <HerosectionComponent
        title="Not Found"
        image="/blogs.jpeg"
        subtitle="This page is not found"
      />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-700">404</h2>
            <p className="text-gray-600 mt-2">This page is not found</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
