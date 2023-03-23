import React from "react"
import Card1 from "../Blogcards/Card1"
import Card2 from "../Blogcards/Card2"
import Card3 from "../Blogcards/Card3" 
import Card4 from "../Blogcards/Card4"

const Blog: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
      <div className="grid-item-1 shadow-md ">
        <Card1 />
      </div>

      <div className="grid-item-2 shadow-md ">
        <Card2 />
      </div>

      <div className="grid-item-3 shadow-md ">
        <Card3 />
      </div>

      <div className="grid-item-4 shadow-md ">
        <Card4 />
      </div>
    </div>
  )
}

export default Blog
