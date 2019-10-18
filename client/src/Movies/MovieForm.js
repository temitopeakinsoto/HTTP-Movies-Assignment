import React, {useEffect, useState} from 'react';
import axios from "axios";

function MovieForm(props) {
    const movieId = props.match.params.id
    console.log("this props is", movieId);

    useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${movieId}`)
      .then(res => console.log("this data is", res.data ))
      .catch(err => console.log(err.response));
    })

    return (
        <form>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            
            
        </form>
    )
}

export default MovieForm;