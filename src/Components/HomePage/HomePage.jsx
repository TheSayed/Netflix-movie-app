import React from 'react'
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import requests from "../../Api/apiRequests"
import Row from '../Row/Row'
import OriginalRow from '../OriginalRow/OriginalRow'

function HomePage() {
    return <>
        <NavBar />

        <Banner />

        <OriginalRow title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Netflix TopRated" fetchUrl={requests.fetchTopRated} />
        <Row title="Netflix Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComdeyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />

    </>



}

export default HomePage

/*
    fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComdeyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`
*/