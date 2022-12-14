import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Header from"./Header.js";
import Footer from"./Footer.js";


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
        <Header/>
          
         
          <h2>Menu List</h2>
  
          <div className="underline"></div>
        </div>
        
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        
   
        <Menu items={menuItems} />
      </section>
      <Footer/>
    </main>
   
  );
};

export default App;
