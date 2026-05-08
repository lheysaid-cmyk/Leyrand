import { Post } from "@/types/Post";
import { Link } from "react-router-dom";

function SingleBlogCard({ post }: { post: Post }) {
  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg";

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const excerpt =
    post.excerpt.rendered.length > 100
      ? `${post.excerpt.rendered
          .substring(0, 200)
          .replace(/(<([^>]+)>)/gi, "")}...`
      : post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "");

  return (
    <div>
      <div className="hover:shadow-lg transition flex flex-col gap-4 overflow-hidden bg-white">
        <img
          src={image}
          alt={post.title.rendered}
          className="w-full aspect-square object-cover"
        />
        <div className="text-start p-4 flex flex-col gap-3">
          <Link
            className="text-lg cursor-pointer hover:underline text-primary font-semibold"
            to={`/insights/${post.id}`}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p className="text-gray-600 text-sm">{date}</p>
          <p className="text-gray-700 mt-2">
            {excerpt}
            <span>
              <Link
                to={`/insights/${post.id}`}
                className="text-primary hover:underline"
              >
                {"  "}Read More
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogCard;
