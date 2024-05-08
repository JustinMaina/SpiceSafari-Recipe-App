import React, { useEffect } from 'react';


function RecipeDescription() {
    useEffect(() => {
        fetch("https://moviedatabase-g11e.onrender.com/recipes")
         .then(response => {
            if(!response.ok) {
                throw new Error('No response yet');
            }
            return response.json();
         })
         .then(data => {
            console.log(data)
         })
         .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
    })
  return (
    <div className = "container">
       <div class="card mb-3">
         <img src="https://imgs.search.brave.com/YXH5xm89Gj3apZ5f1p9xpsfDUlG0wO0dWeXWLuaR_8Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU0/MWIxNTE1ZTRiMGE5/OTBiMzNhNzk2ZS8x/NjExNDI0NjAwNDY3/LTI1RTBGUDFCWExS/S0NZUjY2SE5DL2Fs/aXNvbi1yb21hbi1z/cGljZWQtY2hpY2tw/ZWEtc3Rldy13aXRo/LWNvY29udXQtYW5k/LXR1cm1lcmljLmpw/Zw" class="card-img-top" alt="Spiced Chickpea Stew With Coconut and Turmeric"/>
        <div class="card-body">
          <h1 class="card-title">Spiced Chickpea Stew With Coconut and Turmeric</h1>
          <p class="card-description">Spiced chickpeas are crisped in olive oil, then simmered in a garlicky coconut milk for an insanely creamy, basically-good-for-you stew that evokes stews found in South India and parts of the Caribbean. While the chickpeas alone would be good as a side dish, they are further simmered with stock, bolstered with dark, leafy greens of your choosing and finished with a handful of fresh mint. When shopping, be sure to avoid low-fat coconut milk, coconut milk meant for drinking or cream of coconut: All are very different and would not be suitable here.</p>
          <h1>Ingredients</h1>
          
       </div>
      </div> 
    </div>
  );
}

export default RecipeDescription;
