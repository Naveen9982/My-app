import React ,{useState, useEffect} from 'react'
import './About.css'
import axios from 'axios';



const About = () => {

const [data, setdata] = useState([])
// axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const imgUrl = "https://image.tmdb.org/t/p/original";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
// const imgUrl = "https://image.tmdb.org/t/p/original";
useEffect(()=>{

axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`).then((res)=>{
console.log(res.data.results);
setdata(res.data.results);
})

},[] )

  return (
    <>
    <div className='about'>
        <h1> about</h1>
{

data.map((rs,i)=>{
return <div key={i}>
  
  <img src={imgUrl} alt="" />
    {rs.id}
    <h1> {rs.overview} </h1>
    <h4> {rs.original_title} </h4>
    <h3> {rs.vote_average} </h3>
     </div>
})



}
    </div>
        
    </>
  )
}

export default About
