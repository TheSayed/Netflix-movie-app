import React, { useEffect, useState } from 'react'
import style from './Row.module.css';
import axios from 'axios'
import styles from './Row.css'


export default function Row({ title, fetchUrl }) {

    const [movies, setmovies] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setmovies(request?.data?.results)
            return request;
        }
        fetchData()

    }, [fetchUrl])

    console.log(movies)


    return <>
        <div className={`${style.row}`}>
            <h2>{title}</h2>

            <div className={`${style.row_posters}`}>
                {movies.map((movie) => (
                    <img
                        className={`${style.row_poster}`}
                        src={`${baseUrl}${movie.backdrop_path}`}
                        alt={movie.name}
                        key={movie.id}
                    />
                ))}
            </div>

        </div >
    </>
}
