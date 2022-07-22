import {useDispatch, useSelector} from "react-redux";
import {userAC} from "../redux/actionCreators/userAC";
import {useEffect} from "react";
import {resultAC} from "../redux/actionCreators/resultsAC";
import './index.css'

const PersonalCabinet = () => {

    const height = window.innerHeight
    const dispatch = useDispatch()
    const {result} = useSelector(state=>state.result)
    console.log(result)
    const checkResults = async () => {
        const res = await fetch('http://localhost:4000/results',{
            method:"GET",
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
        })
        const result = await res.json()
        // console.log(result)
        // if (res.status <400) {
            dispatch(resultAC(result))
        // }
    }

    useEffect(()=>{
        checkResults()
    },[])
    return (
        <div className='background' style={{width:"100%",height:height}}>
            <h1 className='text'>Ваш результат</h1>
            <ul>
                {result.map((res)=> <li className='text' key={res.id}>{res.total_score}</li>)}
            </ul>

        </div>
    )
}


export default PersonalCabinet;
