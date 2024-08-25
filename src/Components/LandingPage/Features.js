import React from 'react';
import './Css/Features.css';
import { Link } from 'react-router-dom';

const Features = () => {
  var data=[
    {
      title:"Tournament",
      paragraph:"Participate in upcoming ",
      url:"https://img.freepik.com/free-vector/battle-versus-vs-background-sports-game_1017-23766.jpg"
    },
    {
      title:"Merchandise",
      paragraph:"Shop for Fav Merch!",
      url:"https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg"
    },
    {
      title:"Community",
      paragraph:"Lets Share! ",
      url:"https://static.vecteezy.com/system/resources/previews/026/797/560/large_2x/solidarity-unite-people-hands-together-community-teamwork-realistic-image-ultra-hd-free-photo.jpg"
    },
    {
      title:"My team",
      paragraph:"Check you Strategy ! ",
      url:"https://t3.ftcdn.net/jpg/05/70/73/26/360_F_570732677_aFvTk3cNRpWl0zldGITPJdHHz7jhSFC3.jpg"
    },
    {
      title:"Explore Influencers!",
      paragraph:"Search and Learn about Influencers!",
      url:"https://media.istockphoto.com/id/1213200051/photo/friendly-young-man-vlogging.webp?b=1&s=612x612&w=0&k=20&c=nYPoaQVdA0FpwWnTtvyv5F-AZuTyhfNeB_DwjI8hWMA="
    }
  ]
  let features=data.map((res)=>{
    var url=res.url;
    return(
      
    <div className="feature-card" style={{backgroundImage:"url("+url+")"}} >
            <h3>{res.title}</h3>
            <p>{res.paragraph}</p>
          </div>
    )
  })
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Game Features</h2>
        <div className="features-grid">
          
          {features}
          
        </div>
      </div>
    </section>
  );
};

export default Features;
