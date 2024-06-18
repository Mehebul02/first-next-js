import { getPosts } from "@/services/Get_Data_Api";
import Link from "next/link";


const page = async() => {
    const postsData = await getPosts()
    
    return (
       <div>
            <h1 className="text-2xl text-center mt-10">All Posts:{postsData.length}</h1>
         <div className="grid grid-cols-3 gap-5 p-10 h-screen">
           {
            postsData?.slice(0,10)?.map(data=><div className="border border-red-600 rounded-lg shadow-md p-4 mt-10" key={data.id}>
                <h1><span className="font-bold">Title</span>: {data.title}</h1>
                <h1>Description: {data.body}</h1>
                <button className="btn bg-green-700 text-white px-4 py-2 rounded-md my-10"><Link href={`/posts/${data.id}`}>View</Link></button>
            </div>)
        }
        </div>
       </div>
    );
};

export default page;