import { useEffect, useState } from "react";
import SortBar from "./Sort";
import { Link } from "react-router-dom";

// Star component to render star rating
const Star = ({ filled }) => (
    <span className={filled ? "fas fa-star checked" : "far fa-star"}></span>
);

function Search() {
    const [data, setData] = useState([]);
    const [sortChoice, setSortChoice] = useState("")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(`https://moviedatabase-g11e.onrender.com/recipes`)
            .then(res => res.json())
            .then(dat => setData(dat))
            .catch(error => console.error('Error fetching data:', error));
    };

    function filterRecipes(event){
        const text = event.target.value.toLowerCase();
        if (text === ""){
            fetchData();
        }else{
        //console.log(text);
        const filtered = data.filter((recipe) => {
            //console.log(recipe);
            return recipe.name.toLowerCase().includes(text.toLowerCase())
        })
        //console.log(filtered);
        setData([...filtered])
    }
    }
    
    const handleSortChoice = (event) => {
        setSortChoice(event.target.value);
    };

        
    const sortData = () => {
        setData((prevData) => {
          if (sortChoice === "alphabetical-order") {
            return [...prevData.sort((b, a) => a.name.localeCompare(b.name))];
          } else if (sortChoice === "bestrating") {
            return [...prevData.sort((a, b) => a.rating_value - b.rating_value)];
          }return prevData;
        });
      };

      useEffect (() => {
        sortData();
    }, [sortChoice, sortData]);
//console.log(data);
    

    const renderStars = (rating) => {
        const filledStars = Math.floor(rating);
        const remainingStars = 5 - filledStars;
        const stars = [];

        for (let i = 0; i < filledStars; i++) {
            stars.push(<Star key={i} filled />);
        }

        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={filledStars + i} />);
        }

        return stars;
    };

    const renderCards = data.map((recipe) => (
        <div className="card m-2" key={recipe.id}>
           <Link to={`/description/${recipe.id}`}>
           <img src={recipe.image_path} className="card-img-top" alt="..." />
           </Link> 
            <div className="card-body">
                <h2>{recipe.name}</h2>
                <div className="row">
                    <div className="col-6">
                        {renderStars(recipe.rating_value)}
                    </div>
                    <div className="col-6">{recipe.total_time_string}</div>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <div className="input-group mb-3 m-2">
                <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Search recipes..."
                    aria-label="Search recipes"
                    aria-describedby="button-addon2"
                   onChange={filterRecipes}
                />
                <button
                    className="btn bg-success"
                    type="button"
                    id="button-addon2"
                >
                    Search
                </button>
            </div>
            <SortBar handleSortChoice={handleSortChoice} sortChoice={sortChoice} />
            <div className="cardCarrier">
                {renderCards}
            </div>
        </>
    );
}

export default Search;
