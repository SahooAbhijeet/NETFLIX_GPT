### FEATURES

- Login Page
    - Sign In/ Sign up Form
        - Redirect To Browse Page


- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - MovieSuggestion
            - MovieLists * N
            
- Netflix GPT
    - Search Bar
    - MOvie Suggestion


    
    /*
    *  MainContainer
    *       VideoBackground
    *       VideoTitle
    *    SecondaryContainer
    *       MoviesList*N
    *       Cards*N   
    */


     {PLANNING OF SecondaryContainer}
        * MovieList - Popular
            *( Movie Cards* N)
        * MovieList - Now Playing
            *( Movie Cards* N)
        * MovieList - Trending
            *( Movie Cards* N)
        * MovieList - Horror
            *( Movie Cards* N)


              ## const gptMovies = gptResults?.choices[0]?.message?.content.split(","); --> For each movie call the Search API of TMDB and findout the results of the movie" 

       * Stree, Bhool Bhulaiyaa, Go Goa Gone, Housefull 3, Roohi
            *  0: "Stree" 
            * 1: "Bhool Bhulaiyaa"
            * 2: "Go Goa Gone" 
            * 3: "Housefull 3"
            * 4: "Roohi"   
        