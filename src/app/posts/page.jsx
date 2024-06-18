import { getPosts } from "@/services/Get_Data_Api";


const page = async() => {
    const postsData = await getPosts()
    console.log(postsData);
    return (
        <div className="grid grid-cols-3 gap-5 p-10 h-screen">
           {
            postsData?.slice(0,10)?.map(data=><div className="border border-red-600 rounded-lg shadow-md p-4 mt-10" key={data.id}>
                <h1>Title: {data.title}</h1>
                <h1>Description: {data.body}</h1>
            </div>)
        }
        </div>
    );
};

export default page;