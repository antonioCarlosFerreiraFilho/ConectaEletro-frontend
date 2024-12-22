//CSS
import "./SearchFor.css";
//react
import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";


const SearchFor = () => {
  //initial States
  const [Query, setQuery] = useState("");

  //react router dom
  const navigate = useNavigate();

  //Search
  const HandleSearch = (e) => {
    e.preventDefault();

    if (Query) {

      return navigate(`/search?q=${Query}`);
    }
  };

  return (
    <div className="SearchFor">
      <div className="SearchFor_box">
        <form onSubmit={HandleSearch}>
          <div className="SearchFor_content">
            <input
              type="text"
              placeholder="Procurar..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFor;
