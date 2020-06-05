
var inputValue;
document.querySelector('.search-btn').addEventListener('click', () => {
    let input_value = document.querySelector('#search-text').value;
    console.log(input_value);
    getMovieData(input_value);

})

function getMovieData(value) {
    setTimeout(() => {
        fetch(`https://www.omdbapi.com/?s=${value}&apikey=bea7ac38`)
            .then(Response => Response.json())
            .then(data => {
                console.log(data.Search);

                var movie = data.Search;
                
                for (let i = 0; i < movie.length; i++)
                 {
                    console.log(movie[i].Poster);
                    let html = `<div class="movie-card">
                      <div class="poster"><img src="${movie[i].Poster}"alt="poster"></div><div class="content"></div></div>`;
    
                    document.querySelector('.cards').insertAdjacentHTML('beforeend',html);
                }
               



            })
    })
};
