import re
import os

with open('src/components/Footer.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the queries array. It starts after "Queries Grid Section"
start_str = 'Queries Grid Section'
start_idx = content.find(start_str)

array_start = content.find('[', start_idx)
array_end = content.find('].filter', array_start)

queries_array = content[array_start:array_end+1]

page_code = f"""import Link from 'next/link';
import React from 'react';

export const metadata = {{
  title: 'Sitemap - SettleLoans Queries',
  description: 'Explore all our loan settlement queries and topics.',
}};

export default function SitemapPage() {{
  const queries = {queries_array};

  // Filter out any null hrefs and reverse to show latest first (assuming latest appended at the bottom)
  const sortedQueries = queries.filter(q => q.href).reverse();

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-[#2E2E2E] mb-6">Sitemap</h1>
        <p className="text-gray-600 mb-12 text-lg font-medium">Browse our comprehensive list of resources, guides, and services regarding loan settlements.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {{sortedQueries.map((query, index) => (
            <Link
              key={{index}}
              href={{query.href}}
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-start group"
            >
              <h2 className="text-[#1F5EFF] font-bold text-sm md:text-base group-hover:text-blue-800 transition-colors">
                {{query.name}}
              </h2>
            </Link>
          ))}}
        </div>
      </div>
    </main>
  );
}}
"""

os.makedirs('src/app/sitemap', exist_ok=True)
with open('src/app/sitemap/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_code)
print("Successfully generated src/app/sitemap/page.tsx")
