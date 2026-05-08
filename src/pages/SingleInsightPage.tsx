import HerosectionComponent from "@/components/shared/HerosectionComponent";
import { usePost } from "@/fetcher/post_fetcher";
import { useParams } from "react-router-dom";

function SingleInsightPage() {
  const { id } = useParams();

  const { post, isLoading } = usePost(`posts/${id}/?_embed`);

  return (
    <>
      <HerosectionComponent
        title={"Insight"}
        image={
          post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
          "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg"
        }
        subtitle={"Explore our insights and stories that inspire change!"}
      />
      {isLoading && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-3xl">Loading...</p>
        </div>
      )}

      {!isLoading && !post && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-3xl">Post not found.</p>
        </div>
      )}
      {post && (
        <div className="max-w-4xl mx-auto p-6">
          <h1
            className="text-3xl font-bold text-primary mb-4"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p className="text-sm text-gray-600 mb-6">
            {new Date(post.date).toLocaleDateString()}
          </p>

          <img
            src={
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
              "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg"
            }
            alt={post.title.rendered}
            className="w-full rounded-xl mb-6"
          />

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      )}
    </>
  );
}

export default SingleInsightPage;
