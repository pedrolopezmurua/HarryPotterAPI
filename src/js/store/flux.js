// ./store/flux.js

const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		personajes: [],
		hechizos: [],
		favoritos: []
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
		},
		loadFavoritos: () => {
		  const store = getStore();
		  setStore({ favoritos: store.favoritos });
		},
		addFavorito: favorito => {
			const store = getStore();
			if (!store.favoritos.includes(favorito)) {
			  const nuevosFavoritos = [...store.favoritos, favorito];
			  setStore({ favoritos: nuevosFavoritos });
			} else {
			  console.log("El personaje ya está en la lista de favoritos.");
			}
		  },
		deleteFavorito: index => {
		  const store = getStore();
		  const nuevosFavoritos = store.favoritos.filter(
			(_, i) => i !== index
		  );
		  setStore({ favoritos: nuevosFavoritos });
		},
		eliminarFavorito: index => {
		  const store = getStore();
		  const nuevosFavoritos = [...store.favoritos];
		  nuevosFavoritos.splice(index, 1);
		  setStore({ ...store, favoritos: nuevosFavoritos });
		}
	  }
	};
  };
  
  export default getState;
  