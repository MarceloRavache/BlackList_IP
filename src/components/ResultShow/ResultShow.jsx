import React,{useState,useEffect} from 'react';
import {Alert} from 'react-bootstrap';
import axios from 'axios';


const ResultShow = ({props})=>{

    const [stateShow, setStateShow] = useState("")


    useEffect(()=>{axios.get('http://api.apility.net/badip/'+props)
    .then(res =>{
        setStateShow("[Black List] Encotrado ")
    })
    .catch(err=>{
        setStateShow("[Black List] Não encotrado ")
    })},[]
    )

    return(
        <div>
            <Alert variant="dark">
                {stateShow}
            </Alert>
        </div>
    )
}

export default ResultShow;