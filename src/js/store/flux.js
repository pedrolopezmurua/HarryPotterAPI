const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		personajes: [],
		hechizos: [],
	  },
	  actions: {
		loadSomeData: () => {
		  fetch("https://hp-api.onrender.com/api/characters")
			.then(resp => resp.json())
			.then(data => {
			  setStore({ personajes: data });
			})
			.catch(error => console.log(error));
  
		  fetch("https://hp-api.onrender.com/api/spells")
			.then(resp => resp.json())
			.then(data => {
			  setStore({ hechizos: data });
			})
			.catch(error => console.log(error));
		}
	  }
	};
  };
  
  export default getState;
  