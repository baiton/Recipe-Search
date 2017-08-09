let htmlBody = document.querySelector("main");
let getSearch = "";
let newUrl = "https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q="
const searchInput = document.querySelector('input[name="search"]')


htmlBody.innerHTML = `
<main class="beemo-face"></main>
`


// below is your search results
searchInput.addEventListener('search', function(event) {
  let sound = document.getElementById("equalAudio")
sound.play();
  getSearch = event.target.value
  // console.log(getSearch)
  htmlBody.innerHTML = "";


  fetch(newUrl + getSearch)
    .then(function(response) {
      // console.log("response status", response.status);
      response.json()
        .then(function(data) {
          // console.log("data", data)
          let recipes = data.results;
          // console.log("recipes", recipes);


          // you will be looping through the recipes to grab info

          for (i = 0; i < 8; i++) {
            let recipe = recipes[i];
            // you will be placing recipe.title, recipe.href, recipe.ingredients,

            function myHtml(data) {
              let results = `
              <div class="recipe" style="background-image: url(${recipe.thumbnail})">
                  <section class="filter">
                    <ul>
                      <li class="recipeName"><a href="${recipe.href}">${recipe.title}</a></li>
                      <li class="ingredients">ingredients: ${recipe.ingredients}</li>
                    </ul>
                  </section>
              </div>
              `
              return results;
            }
            console.log(myHtml);
            let addingRecipes = myHtml(data);
            htmlBody.innerHTML += addingRecipes;

          }
        })
    })
})

// style="background-image: url:(http://img.recipepuppy.com/152332.jpg)"
// style="background-image: url(http://i54.tinypic.com/4zuxif.jpg)"
