import { useEffect, useState } from "react";

// Star component to render star rating
const Star = ({ filled }) => (
    <span className={filled ? "fas fa-star checked" : "far fa-star"}></span>
);

function Search() {
    const [data, setData] = useState([]);

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
        const text = event.target.value
        //console.log(text);
        const filtered = data.filter((recipe) => {
            //console.log(recipe);
            return recipe.name.toLowerCase().includes(text.toLowerCase())
        })
        //console.log(filtered);
        setData([...filtered])
    }
    
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
            <img src={recipe.image_path} className="card-img-top" alt="..." />
            <div className="card-body">
                <p>{recipe.name}</p>
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
            <div className="cardCarrier">
                {renderCards}
            </div>
        </>
    );
}

export default Search;
