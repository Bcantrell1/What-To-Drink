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
        
        drinkElement.innerHTML += 
        `        
        <div class="card mb-3 text-center mx-auto">
            <h2 class="card-header ">${drinkName}</h2>
                <div class="card-body">
                    <h3 class="card-title">${drinkCat}</h3>
                </div>
                <img style="height: 33%; width: 33%;" class ="d-block mx-auto" src="${drinkImage}" alt="Card image">
            <div class="card-body">
                <p class="card-text">${drinkInst}</p>
            </div>
        </div>
        `
    })
    loadingElement.style.display = 'none';
}
button.addEventListener('click', searchDrink);