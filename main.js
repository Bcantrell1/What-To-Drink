const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const button = document.querySelector('#button')
const drinkElement = document.querySelector('#drink-ele');
const loadingElement = document.querySelector('.progress');

async function searchDrink() {
    drinkElement.innerHTML = '';
    loadingElement.style.display = '';

    const response = await fetch(API_URL);
    const json = await response.json();
    const drink = json.drinks;

    drink.forEach(item => {
        let drinkName = item.strDrink;
        let drinkCat = item.strCategory;
        let drinkImage = item.strDrinkThumb;
        let drinkInst = item.strInstructions;
        let drinkIngre = 
        [
            item.strIngredient1, item.strIngredient2, 
            item.strIngredient3, item.strIngredient4, item.strIngredient5,
            item.strIngredient6, item.strIngredient7, item.strIngredient8,
            item.strIngredient9, item.strIngredient10, item.strIngredient11,
            item.strIngredient12, item.strIngredient13, item.strIngredient14,
            item.strIngredient15
        ]
        let drinkPortion = 
        [
            item.strMeasure1, item.strMeasure2, 
            item.strMeasure3, item.strMeasure4, item.strMeasure5,
            item.strMeasure6, item.strMeasure7, item.strMeasure8,
            item.strMeasure9, item.strMeasure10, item.strMeasure11,
            item.strMeasure12, item.strMeasure13, item.strMeasure14,
            item.strMeasure15
        ]
        let ingredientsList = []
        let portionsList = []
        let recipe = [];


        drinkIngre.forEach((ingredient) => {
            if(ingredient != null) {
                ingredientsList.push('<li class="drink-data">'+ingredient+':');
            }
        })

        drinkPortion.forEach((portion) => {
            if(portion != null) {
                portionsList.push(' '+portion+'</li>');
            }
        })

        for (let i = 0; i < ingredientsList.length; i++) {
            if(i >= 0) {
                let listItem = ingredientsList[i] + portionsList[i];
                recipe.push(listItem);
            }   
        }

        drinkElement.innerHTML += 
        `        
        <div class="card">
            <div class="column side">
                <h2> Drink name <br> <span class="drink-data">${drinkName}</span></h2>
                <h3>Drink type <br> <span class="drink-data">${drinkCat}</span></h3>
            </div>
            <div class ="column middle">
                <img src="${drinkImage}" alt="Card image">
            </div>
            <div class="column side">
                <h2>Instructions </h2>
                <p class="drink-data">${drinkInst}</p>
            <h2 class=""> Ingredients </h2>
                <ul>
                    ${recipe.join("")}
                </ul>
            </div>
        </div>
        `
    })
    loadingElement.style.display = 'none';
}
button.addEventListener('click', searchDrink);