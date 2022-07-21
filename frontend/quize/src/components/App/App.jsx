import { useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useDispatch,useSelector} from "react-redux";
import {regUserAC} from "../redux/actionCreators/userAC";


import { GeistProvider, CssBaseline } from '@geist-ui/core'


function App() {
  const dispatch = useDispatch()
  const {user}=useSelector(state=>state.user)
  // useEffect(()=>{
  //   fetch('/users',{
  //     method:"GET",
  //     credentials: 'include',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //   })
  //       .then(res => res.json())
  //       .then(data=> dispatch(regUserAC(data)))
  // },[])
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            {/*{user.name &&*/}
            {/*  <>*/}
            {/*    <Route path="/main" element={<Home />} />*/}
            {/*    <Route path='/pc' element={<PersonalCab />}*/}
            {/*    <Route path='/best' element={<CardFriend/>}/> */}
            {/*    */}
            {/*    </>*/}
            {/*    }*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
