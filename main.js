let htmlBody = document.querySelector("main");
let getSearch =
  // below is your search results
  function submission() {
    getSearch = document.querySelector("input");
  }

// + getSearch.value  needs to concat to fetch url

fetch("http://crossorigin.me/http://www.recipepuppy.com/api/?q=pizza")
  .then(function(response) {
    console.log("response status", response.status);
    response.json()
      .then(function(data) {
        console.log("data", data)
        let recipes = data.results;
        console.log("recipes", recipes);


        // you will be looping through the recipes to grab info

        for (i = 0; i < recipes.length; i++) {
          let recipe = recipes[i];
          // you will be placing recipe.title, recipe.href, recipe.ingredients,

          function myHtml(data) {
            let results = `
        <div id="recipe">
          <img src="${recipe.thumbnail}" alt="">
          <article class="">
            <section class="filter">
              <ul>
                <li><a href="${recipe.href}">${recipe.title}</a></li>
                <li>ingredients: ${recipe.ingredients}</li>
              </ul>
            </section>
          </article>
        </div>
        `
            return results;
          }
          let addingRecipes = myHtml(data);
          htmlBody.innerHTML += addingRecipes;

        }
      })
  })
