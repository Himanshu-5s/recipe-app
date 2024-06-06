import React from 'react';
import Recipe from './Recipe';
import './App.css';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/SignUp';

const App = () => {
  const APP_ID = "fb103e96"
  const APP_KEY = "2b04195c09213124acbd3e920d68f9a5	"

   
  const [recipes, setRecipes] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("chicken");

  
  React.useEffect( ()=>{
    getRecipes();
    }, [query]);


    const getRecipes =  async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ APP_ID}&app_key=${APP_KEY}` );
      const data = await response.json();
      setRecipes(data.hits);
      
    }

    const updateSearch = (e) => {
      setSearch(e.target.value);
      
    }

    const getSearch = (e) =>{
      e.preventDefault();
      setQuery(search)
    }

  return (
    <div className = "App">
      <SignIn/>
      <SignUp/>
      <form onSubmit={getSearch}   className="search-form"> 
        <input 
            className="search-bar" 
            type = "text" 
            value = {search} 
            onChange = {updateSearch}
          />
        <button className="search-button">
          search
        </button>
      </form>   

      <div className="recipes">
        {recipes.map(recipe => (
        <Recipe
          key = {recipe.recipe.label}
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}

        />
      ))};
      </div>
    </div>
  );
};

export default App;