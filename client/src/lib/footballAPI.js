export const getMatchesResults = (matchday) => {
  return fetch(`http://localhost:8000/footballAPI/matches/${matchday}`).then( res => res.json()).then(data => {
    return data;
})
};