import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
const Courses = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async ()=>{
      try{
        const res=await axios.get('http://localhost:8080/books');
         console.log(res.data);
         setBook(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getBook();

  },[])
  return (
    <div>
      <NavBar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Happy to see <span className="text-pink-500">You 🤩</span>
          </h1>
          <p className="12">
            Hey there! Welcome to our online bookshop, your go-to spot for all
            things books! Whether you're into gripping stories, learning
            something new, or just want to relax with a good read, we've got you
            covered. Our website is super easy to use, so you can browse and buy
            your favorite books hassle-free. From old classics to the latest
            hits, there's something here for everyone. So come on in and let's
            dive into the wonderful world of books together!
          </p>
          <Link to="/">
          <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"> Back </button>
          </Link>
        </div>
        <div className="grid mt-12 grid-cols-1 md:grid-cols-4 ">
            {
                book.map((x)=>{
                    return <Cards ele={x} key={x.id}/>
                })
            }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
