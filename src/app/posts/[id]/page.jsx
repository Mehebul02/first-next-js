import React from 'react';
const getDetailsPost =async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    console.log(data);
    return data
}
const DetailsPage =async ({params}) => {
    const {title,body}= await getDetailsPost(params.id)
    
    return (
        <div>
           <h1>Title: {title}</h1>
        </div>
    );
};

export default DetailsPage;