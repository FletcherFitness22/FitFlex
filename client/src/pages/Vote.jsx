// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// // import { getMatchup, createVote } from '../utils/api';

// // Uncomment import statements below after building queries and mutations
// // import { useQuery, useMutation } from '@apollo/client';
// // import { CREATE_VOTE } from '../utils/mutations';
// // import { QUERY_MATCHUPS } from '../utils/queries';

// const Vote = () => {
  
//   let { id } = useParams();

//   useEffect(() => {
//     // const getMatchupInfo = async () => {
//     //   try {
//     //     const res = await getMatchup(id);
//     //     if (!res.ok) {
//     //       throw new Error('No matchup');
//     //     }
//     //     const matchup = await res.json();
//     //     setMatchup(matchup);
//     //   } catch (err) {
//     //     console.error(err);
//     //   }
//     // };
//     // getMatchupInfo();
//   }, [id]);

//   const handleClick = async (event) => {
//     event.preventDefault()
//     console.log(event);
//     // try {
//     //   const res = await createVote({ id, techNum });

//     //   if (!res.ok) {
//     //     throw new Error('Could not vote');
//     //   }

//     //   const matchup = await res.json();
//     //   console.log(matchup);
//     //   setMatchup(matchup);
//     // } catch (err) {
//     //   console.error(err);
//     // }
//   };

//   return (
//     <div className="card bg-white card-rounded w-50">
//       <div className="card-header bg-dark text-center">
//         <h1>Sets, Reps, Results</h1>
//       </div>
//       <div className="card-body text-center mt-3">
//         <h2>
//           5
//         </h2>
//         <h3>
          
//         </h3>
//         <button className="btn btn-info" onClick={() => handleVote(1)}>
          
//         </button>{' '}
//         <button className="btn btn-info" onClick={() => handleVote(2)}>
         
//         </button>
//         <div className="card-footer text-center m-3">
//           <br></br>
//           <Link to="/">
//             <button className="btn btn-lg btn-danger">Favorite Flex</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vote;
