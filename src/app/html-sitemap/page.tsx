import getSitemap from '@/app/sitemap';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | SettleLoan',
  description: 'Sitemap for SettleLoan containing all our pages.',
};

export default function SitemapPage() {
  const sitemapItems = getSitemap();

  const formatTitle = (url: string) => {
    try {
      const path = new URL(url).pathname;
      if (path === '/' || path === '') return 'Home';
      
      const cleanPath = path.replace(/^\//, '').replace(/[-/]/g, ' ');
      return cleanPath
        .split(' ')
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    } catch (e) {
      return url;
    }
  };

  const getPath = (url: string) => {
    try {
      return new URL(url).pathname;
    } catch (e) {
      return url;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">HTML Sitemap</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {sitemapItems.map((item, index) => {
          const title = formatTitle(item.url);
          const path = getPath(item.url);
          return (
            <Link 
              href={path} 
              key={index}
              className="group p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col justify-center text-center min-h-[120px] hover:border-blue-300"
            >
              <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors line-clamp-3">
                {title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
