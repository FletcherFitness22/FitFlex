import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { getAllMatchups } from "../utils/api";

// Uncomment import statements below after building queries and mutations
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const [matchupList, setMatchupList] = useState([]);

  useEffect(() => {
    // const getMatchupList = async () => {
    //   try {
    //     const res = await getAllMatchups();
    //     if (!res.ok) {
    //       throw new Error("No list of matchups");
    //     }
    //     const matchupList = await res.json();
    //     setMatchupList(matchupList);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // getMatchupList();
  }, []);

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>FitFlex</h1>
      </div>
      <div className="card-body m-5 text-center">
        <h2>Fitness With A Purpose</h2>
        {/* <ul className="square">
          {matchupList.map((matchup) => {
            return (
              <li key={matchup._id}>
                <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                  {matchup.tech1} vs. {matchup.tech2}
                </Link>
              </li>
            );
          })}
        </ul> */}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Your Technique Is Key</h2>
        <Link to="/login">
          <button className="btn btn-lg btn-danger">Click to Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
