
const page = ({params}) => {
    console.log(params.slug);
    const {title} = blogs.find(blog =>blog.slug == params.slug)
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};
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
export default page;