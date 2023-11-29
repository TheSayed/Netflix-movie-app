import React, { useEffect } from 'react'
import style from './Banner.module.css'
import axios from 'axios'
import requests from "../../Api/apiRequests"
import { useState } from 'react'

export default function Banner() {

    function truncate(string, n) {
        return string.length > n ? string.substr(0, n - 1) + "....." : string
    }

    const [movie, setMovie] = useState([])


    useEffect(() => {

        async function fetchRequest() {
            const request = await axios.get(requests.fetchNetflixOriginals)


            setMovie(
                request?.data?.results[
                Math.floor(Math.random() * request?.data?.results.length - 1)
                ]
            )
            return request
        }
        fetchRequest()
    }, [])


    return <>
        <header
            className={`${style.banner}`}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
                backgroundPositionY: 'center',
                position: 'relative',
                height: '500px',
                objectFit: 'contain',
                color: 'white',



            }}
        >
            <div className="col-md-12">
                <div className={`${style.banner__content}`}>
                    <h1 className={`${style.banner__title}`}>{movie?.name}</h1>
                    <div className={`${style.banner__buttons}`}>
                        <div className={`${style.banner__button}`}>Play</div>
                        <div className={`${style.banner__button}`}>My List</div>
                    </div>
                    <h3 className={`${style.banner__description}`}>{movie && movie.overview ? truncate(movie.overview, 150) : ''}</h3 >

                </div >
            </div >
            <div className={`${style.banner__fadeButton}`} />
        </header >
    </>


}
