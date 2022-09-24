import Header from "./components/Header";
import "./App.css";
import SearchBox from "./components/SearchBox";
import UserGists from "./components/UserGists";
import axios from "axios";
import { BASE_URL } from "./constants/api-base-url";
import { useState } from "react";

function App() {
  const [userGists, setUserGists] = useState([]);
  const getSearchedUserGists = async (username) => {
    try {
      const response = await axios.get(`${BASE_URL}users/${username}/gists`);
      setUserGists(response.data);
      console.log(
        "🚀 ~ file: App.js ~ line 15 ~ getSearchedUserGists ~ response.data",
        response.data
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: App.js ~ line 17 ~ getSearchedUserGists ~ error",
        error
      );
    }
  };
  return (
    <div className="bg-gray-300 dark:bg-gray-800 h-screen w-screen flex flex-col items-center">
      <Header />
      <SearchBox getSearchedUserGists={getSearchedUserGists} />
      <UserGists userGists={userGists} />
    </div>
  );
}

export default App;
