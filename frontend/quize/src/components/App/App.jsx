import { useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useDispatch,useSelector} from "react-redux";
import {userAC} from "../redux/actionCreators/userAC";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Main from "../Main/Main";




function App() {
  const dispatch = useDispatch()
  const {user}=useSelector(state=>state.user)

    const checkUser = async () => {
      const res = await fetch('http://localhost:4000/main',{
          method:"GET",
          credentials: 'include',
          headers: {
              'Content-type': 'application/json'
          },
      })
        const result = await res.json()
        // console.log(result)
        if (res.status <400) {
            dispatch(userAC(result))
        }
    }

    useEffect(()=>{
        checkUser()
    },[])
  return (
    <div className='app'>
        <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/main" element={<Main />} />
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
