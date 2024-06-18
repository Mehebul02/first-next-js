'use client'
import { useEffect, useState } from "react";
const Meals = () => {
    const [search,setSearch]=useState('a')
    const [meals,setMeals]=useState([])
    const loadData =async()=>{
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        const data = await res.json()
        console.log(data.meals);
        setMeals(data.meals)
        }
        catch(err){
            console.log(err.message);
        }
    }
    const handler =e=>{
        console.log(e.target.value);
        setSearch(e.target.value)
    }
    useEffect(()=>{
        loadData()
    },[])
    return (
        <div>
              <div className="join">
        <input onChange={handler} type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button onClick={ async()=>await loadData()} className="text-white font-medium bg-green-700 px-4 py-2 rounded-md btn-primary join-item">Subscribe</button>
      </div>
      <div className="grid grid-cols-3 gap-6 ">
{
    meals?.map(meal=>(<div className="border border-red-700 rounded-md" key={meal.idMeal}>
        <h1>{meal.strMeal}</h1>
        <h1>{meal.strInstructions}</h1>
        <Image src={meal.strMealThumb} alt={meal.strMeal} width={500} height={400}/>
    </div>))
}
      </div>
        </div>
    );
};

export default Meals;