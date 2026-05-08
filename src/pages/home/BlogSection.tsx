import SingleBlogCard from "@/components/shared/SingleBlogCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePosts } from "@/fetcher/post_fetcher";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const { posts, isLoading } = usePosts("posts?_embed&categories=3");

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold  text-primary">
            Latest Updates
          </h2>
          <p className="text-gray-600 mt-2 text-lg md:text-xl">
            Stay informed with our latest news and inspiring stories.
          </p>
        </div>
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
            {posts.slice(0, 3).map((post) => (
              <div className="" key={post.id}>
                <SingleBlogCard post={post} />
              </div>
            ))}
          </div>
        )}
        {/* Blog Cards */}

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button
            size="lg"
            variant="default"
            asChild
            className="border-none rounded-none"
          >
            <Link to={"/insights"}>View All news</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
