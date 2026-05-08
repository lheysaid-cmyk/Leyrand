// import React from "react";

import HerosectionComponent from "@/components/shared/HerosectionComponent";
import SingleBlogCard from "@/components/shared/SingleBlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { usePosts } from "@/fetcher/post_fetcher";

function Insights() {
  const { posts, isLoading } = usePosts("posts?_embed&categories=3");

  return (
    <div>
      <HerosectionComponent
        title="Insights and Stories"
        image="/blogs.jpeg"
        subtitle="Explore our latest blogs, updates, and stories to stay informed and inspired!"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Blog Cards */}
          {isLoading && (
            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="hover:shadow-lg transition rounded-xl-none flex flex-col gap-4"
                >
                  <Skeleton className="w-full aspect-square object-cover rounded-t-none" />
                  <div className="text-start p-4 flex flex-col gap-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}
          {posts && posts.length == 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-700">
                No posts available at the moment.
              </h2>
              <p className="text-gray-600 mt-2">
                Please check back later for the latest updates and stories.
              </p>
            </div>
          )}
          {posts && posts.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div className="" key={post.id}>
                  <SingleBlogCard post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Insights;
