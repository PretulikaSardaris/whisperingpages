import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { db } from '../Context/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Bookmark = () => {
  const { user } = useAuth();
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    const fetchBookmarkedPosts = async () => {
      if (!user) return;
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const { bookmarks } = userDoc.data();
        const posts = await Promise.all(bookmarks.map(async (postId) => {
          const postDoc = await getDoc(doc(db, 'posts', postId));
          return { id: postDoc.id, ...postDoc.data() };
        }));
        setBookmarkedPosts(posts);
      }
    };

    fetchBookmarkedPosts();
  }, [user]);

  return (
    <div>
      <h1>Bookmarked Posts</h1>
      <div>
        {bookmarkedPosts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
