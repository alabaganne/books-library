import { Link } from 'react-router-dom';
import firstBlogImage from '../../assets/3.jpg';
import secondBlogImage from '../../assets/4.jpg';
import thirdBlogImage from '../../assets/5.jpg';
import forthBlogImage from '../../assets/1.jpg';

interface Post {
  id: number;
  title: string;
  imageUrl: string | null;
}

export default function AboveBlog() {
  // send request to server to get posts list
  const blogPosts: Array<Post> = [
    {
      id: 1,
      title: 'Showlands: A Journey Through Lost Britain',
      imageUrl: firstBlogImage,
    },
    {
      id: 2,
      title: 'Showlands: A Journey Through Lost Britain',
      imageUrl: secondBlogImage,
    },
    {
      id: 3,
      title: 'Showlands: A Journey Through Lost Britain',
      imageUrl: thirdBlogImage,
    },
    {
      id: 4,
      title: 'Showlands: A Journey Through Lost Britain',
      imageUrl: forthBlogImage,
    },
  ];

  return (
    <div>
      <h2>Above Blog</h2>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {blogPosts &&
          blogPosts.map((post) => (
            <Link
              key={post.id}
              to="/"
              className="bg-common col-span-1 flex h-60 items-end rounded-lg bg-white p-6 text-white"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)), url(' +
                  post.imageUrl +
                  ')',
              }}
            >
              <div className="text-lg font-bold">{post.title}</div>
            </Link>
          ))}
      </div>
    </div>
  );
}
