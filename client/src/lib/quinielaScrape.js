export const getQuinielaResults = () => {
  return fetch("http://localhost:8000/quinielaScrape/quiniela")
    .then(res => res.json())
    .then(data => {
      return data;
    });
};

export const getQuinielaBet = () => {
  return fetch("http://localhost:8000/quinielaScrape/apuesta")
    .then(res => res.json())
    .then(data => {
      return data;
    });
};