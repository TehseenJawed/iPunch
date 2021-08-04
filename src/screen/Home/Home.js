import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {BASE_URL} from '../../redux/reducer/AuthReducer'
import {ChangeBaseURL} from '../../redux/action/AuthAction'
function Home() {
    const URL = useSelector(BASE_URL)
    const dispatch = useDispatch()
    
    
    console.log(URL)
    return (
        <div>
            <button onClick={() => dispatch(ChangeBaseURL("http://www.google.com"))}>Change URL</button>
        </div>
    )
}

export default Home
