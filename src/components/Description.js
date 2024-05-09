import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDescription() {
    const [recipe, setRecipe] = useState(null); // Change to single recipe state
    const params = useParams();
    const recipeId = params.id;

    useEffect(() => {
        fetch(`https://moviedatabase-g11e.onrender.com/recipes/${recipeId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })import React, { useState, useEffect } from 'react';
            import { useParams, useNavigate } from 'react-router-dom';
            
            function RecipeDescription() {
                const [recipe, setRecipe] = useState(null); // Change to single recipe state
                const params = useParams();
                const recipeId = params.id;
                const navigate = useNavigate();
            
                useEffect(() => {
                    fetch(`https://moviedatabase-g11e.onrender.com/recipes/${recipeId}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Failed to fetch data');
                            }
                            return response.json();
                        })
                        .then(data => {
                            setRecipe(data); // Update recipe state with fetched data
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });
                }, [recipeId]); // Add recipeId to dependency array
            
                if (!recipe) {
                    return <div>Loading...</div>; // Render loading state until recipe is fetched
                }
                function goToSearch () {
                    navigate('/search');
                    console.log("alert")
                }
            
                return (
                    <>
                      <div className="row">
                        <div className="col-md-11"></div>
                        <div className="col-md-1">
                            <button onClick={goToSearch}>Go to Search</button>
                        </div>
                     </div>  
                        <section>
                            <div className="container">
                                <div className="card-overlay mb-3 ">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={recipe.image_path} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div className="card-body">
                                                <h1 className="card-title">{recipe.name}</h1>
                                                <h3>Description</h3>
                                                <p className="card-text"><small className="text-body-secondary">{recipe.description}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1>Ingredients</h1>
                                    <h6 className="card-description">{recipe.ingredients}</h6>
                                </div>
                                <h1>Instructions</h1>
                                <h6 className="card-ingredients">{recipe.instructions}</h6>
                            </div>
                        </section>
                    </>
                );
            }
            
            export default RecipeDescription;
            .then(data => {
                setRecipe(data); // Update recipe state with fetched data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [recipeId]); // Add recipeId to dependency array

    if (!recipe) {
        return <div>Loading...</div>; // Render loading state until recipe is fetched
    }

    return (
        <>
            <section>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={recipe.image_path} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title">{recipe.name}</h1>
                                <h2>Description</h2>
                                <p class="card-text"><small class="text-body-secondary">{recipe.description}</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1>Ingredients</h1>
                        <p className="card-description">{recipe.ingredients}</p>
                    </div>
                    <h1>Instructions</h1>
                    <p className="card-ingredients">{recipe.instructions}</p>
                </div>
            </section>
        </>
    );
}

export default RecipeDescription;
