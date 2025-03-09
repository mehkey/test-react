import { useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const categories = ['For You', 'Following', 'News', 'Sports', 'Entertainment'];

const newsItems = [
  {
    id: 1,
    title: "Apple's Latest Innovation: What to Expect in 2024",
    category: "Tech",
    author: "John Smith",
    authorAvatar: "https://i.pravatar.cc/150?img=1",
    image: "https://source.unsplash.com/random/400x300?tech",
    time: "2 hours ago",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Sustainable Energy: New Breakthroughs",
    category: "Science",
    author: "Sarah Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=2",
    image: "https://source.unsplash.com/random/400x300?energy",
    time: "4 hours ago",
    readTime: "7 min read"
  },
  // Add more news items as needed
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('For You');

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white z-10 px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Good Morning</h1>
            <p className="text-gray-500">Monday, 11 March</p>
          </div>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </div>

        {/* Categories */}
        <div className="overflow-x-auto -mx-6 px-6">
          <div className="flex space-x-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-pill whitespace-nowrap ${
                  activeCategory === category ? 'active-category' : 'inactive-category'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </header>

      {/* News Feed */}
      <div className="px-6 space-y-6 mt-6">
        {newsItems.map((item) => (
          <motion.article
            key={item.id}
            className="news-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <Avatar src={item.authorAvatar} alt={item.author} />
                <div>
                  <h3 className="font-medium">{item.author}</h3>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
              <IconButton size="small">
                <BookmarkBorderIcon />
              </IconButton>
            </div>
            
            <div className="relative h-48 rounded-xl overflow-hidden mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600 mb-2">
                {item.category}
              </span>
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.readTime}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Home; 