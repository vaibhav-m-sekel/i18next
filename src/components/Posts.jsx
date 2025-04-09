import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const translatePost = (text) => {
    // This is a simple example. In a real application, you would use a translation API
    // or have pre-translated content in your translation files
    const translations = {
      en: text,
      fr: `[FR] ${text}`,
      hi: `[HI] ${text}`,
      ar: `[AR] ${text}`,
    };
    return translations[i18n.language] || text;
  };

  if (loading) {
    return <div className="posts-loading">{t('posts.loading')}</div>;
  }

  if (error) {
    return <div className="posts-error">{t('posts.error', { error })}</div>;
  }

  return (
    <div className="posts-container">
      <h2>{t('posts.title')}</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{translatePost(post.title)}</h3>
            <p>{translatePost(post.body)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts; 