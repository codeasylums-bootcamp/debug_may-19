




var search=document.getElementById("searchbar").value
console.log(search)

		
console.log("asd")
axios.get("http://www.omdbapi.com/?apikey=2448689e&t=avengers endgame")
    .then(function (response) {
        console.log("asd")
        console.log(response)
        //poster
        var img = response.data.Poster
        console.log(img)
        var el_img = document.getElementById("poster")
        var poster_el = document.createElement("img")
        poster_el.src = img
        console.log(poster_el)
        poster_el.style = "width:100%"
        el_img.appendChild(poster_el)


        //title    
        var title = response.data.Title
        var el_title = document.getElementById("title")
        var title_el = document.createElement("span")
        title_el.innerHTML = title
        console.log(title_el)

        el_title.appendChild(title_el)
        //done

        //released
        var released = response.data.Released
        var el_released = document.getElementById("released")
        var released_el = document.createElement("span")
        released_el.innerHTML = released
        console.log(released_el)

        el_released.appendChild(released_el)

        //runtime
        var runtime = response.data.Runtime
        var el_runtime = document.getElementById("runtime")
        var runtime_el = document.createElement("span")
        runtime_el.innerHTML = runtime
        console.log(runtime_el)
        el_runtime.appendChild(runtime_el)


        //genre
        var genre = response.data.Genre
        var el_genre = document.getElementById("genre")
        var genre_el = document.createElement("span")
        genre_el.innerHTML = genre
        console.log(genre_el)
        el_genre.appendChild(genre_el)

        //rated
        var rated = response.data.Rated
        var el_rated = document.getElementById("rated")
        var rated_el = document.createElement("span")
        rated_el.innerHTML = rated
        console.log(rated_el)
        el_rated.appendChild(rated_el)


        //directors
        var directors = response.data.Director
        var el_directors = document.getElementById("directors")
        var directors_el = document.createElement("span")
        directors_el.innerHTML = directors
        console.log(directors_el)
        el_directors.appendChild(directors_el)

        //writer
        var writer = response.data.Writer
        var el_writer = document.getElementById("writer")
        var writer_el = document.createElement("span")
        writer_el.innerHTML = writer
        console.log(writer_el)
        el_writer.appendChild(writer_el)

        //imdbrating
        var imdbrating = response.data.imdbRating
        var el_imdbrating = document.getElementById("imdbrating")
        var imdbrating_el = document.createElement("span")

        var imdbid = response.data.imdbID
        var lnk = document.createElement("a")
        lnk.href = "https://www.imdb.com/title/" + imdbid
        lnk.innerText = imdbrating
        imdbrating_el.appendChild(lnk)
        console.log(imdbrating_el)
        el_imdbrating.appendChild(imdbrating_el)

        /*
        //imdbid
        
        var el_imdbid=document.getElementById("imdbid")
        var imdbid_el=document.createElement("span")
        imdbid_el.innerText="IMDB-ID : "
        
        
        lnk.innerText=imdbid
        //console.log(lnk)
        imdbid_el.appendChild(lnk)
        console.log(imdbid_el)
        el_imdbid.appendChild(imdbid_el)
        
        
        //metascore
        var metascore=response.data.Metascore
        var el_metascore=document.getElementById("metascore")
        var metascore_el=document.createElement("metascore")
        metascore_el.innerHTML="MetaScore : "+metascore
        console.log(metascore_el)
        el_metascore.appendChild(metascore_el)
        */





        //website
        var website = response.data.Website
        var el_website = document.getElementById("website")
        var website_el = document.createElement("span")
        website_el.innerHTML = website
        console.log(website_el)
        el_website.appendChild(website_el)
        //////////////////////////////////////////////

        /*
                        //production
                        var production = response.data.Production
                        var el_production = document.getElementById("production")
                        var production_el = document.createElement("span")
                        production_el.innerHTML = production
                        console.log(production_el)
                        el_production.appendChild(production_el)
        
        
        
        
                        //language
                        var language = response.data.Language
                        var el_language = document.getElementById("language")
                        var language_el = document.createElement("span")
                        language_el.innerHTML = language
                        console.log(language_el)
                        el_language.appendChild(language_el)
        */
        //plot
        var plot = response.data.Plot
        var el_plot = document.getElementById("plot")
        var plot_el = document.createElement("span")
        plot_el.innerHTML = plot
        console.log(plot_el)
        el_plot.appendChild(plot_el)
        console.log(el_plot)



        //////////////////////////////////////////////

        //actors
        var actors = response.data.Actors
        var el_actors = document.getElementById("actors")
        var actors_el = document.createElement("span")
        actors_el.innerHTML = actors
        console.log(actors_el)
        el_title.appendChild(actors_el)







    })
    .catch(function (err) {
        console.log(err)

    })





