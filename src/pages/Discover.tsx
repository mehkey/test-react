import { useState } from 'react';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const trendingTopics = [
  {
    id: 1,
    title: "Climate Change",
    articles: 234,
    image: "https://source.unsplash.com/random/400x300?climate"
  },
  {
    id: 2,
    title: "Space Exploration",
    articles: 156,
    image: "https://source.unsplash.com/random/400x300?space"
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    articles: 342,
    image: "https://source.unsplash.com/random/400x300?ai"
  },
  // Add more topics as needed
];

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white z-10 px-6 py-4">
        <h1 className="text-2xl font-bold">Discover</h1>
        
        {/* Search Bar */}
        <div className="bg-gray-100 rounded-full flex items-center px-4 py-2 mt-4">
          <SearchIcon className="text-gray-400 mr-2" />
          <InputBase
            placeholder="Search topics, news, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
        </div>
      </header>

      {/* Trending Topics */}
      <section className="px-6 mt-6">
        <div className="flex items-center mb-4">
          <TrendingUpIcon className="text-black mr-2" />
          <h2 className="text-lg font-semibold">Trending Topics</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {trendingTopics.map((topic) => (
            <div
              key={topic.id}
              className="relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold">{topic.title}</h3>
                <p className="text-white/80 text-sm">{topic.articles} articles</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Tags */}
      <section className="px-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {['#technology', '#science', '#health', '#politics', '#environment', '#business'].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover; 