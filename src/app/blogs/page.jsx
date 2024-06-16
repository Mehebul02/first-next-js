import AboutContent from '@/components/AboutContent';
import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    const blogs =[
        {
          "slug": "comprehensive-guide-on-how-to-learn-python-effectively",
          "title": "A Comprehensive Guide on How to Learn Python Effectively",
          "viewDetails": "View Details"
        },
        {
          "slug": "top-10-tips-for-maintaining-a-healthy-eating-habit",
          "title": "Top 10 Tips for Maintaining a Healthy Eating Habit",
          "viewDetails": "View Details"
        },
        {
          "slug": "ultimate-travel-guide-to-exploring-the-beauty-of-paris",
          "title": "The Ultimate Travel Guide to Exploring the Beauty of Paris",
          "viewDetails": "View Details"
        },
        {
          "slug": "in-depth-understanding-of-artificial-intelligence-and-its-implications",
          "title": "An In-Depth Understanding of Artificial Intelligence and Its Implications",
          "viewDetails": "View Details"
        },
        {
          "slug": "best-books-to-read-in-2024-a-curated-list-for-book-lovers",
          "title": "Best Books to Read in 2024: A Curated List for Book Lovers",
          "viewDetails": "View Details"
        }
      ]
      
      
    return (
        <div className=' text-center gap-5'>
          {
            blogs?.map(blog=>(<div key={blog.slug} className='border p-5'>
                <h1>{blog.slug}</h1>
                <h1>{blog.title}</h1>
                <button className='text-xl text-white font-semibold bg-orange-500 px-4 py-2 rounded-lg'>
                   <Link href={`/blogs/${blog.slug}`}> {blog.viewDetails}</Link>
                    </button>

            </div>))
          }
        </div>
    );
};

export default BlogsPage;