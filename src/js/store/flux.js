const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			personaje:[
				
			],
			hechizo:[
			
			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				loadSomeData: () => {
					fetch("https://hp-api.onrender.com/api/characters")
						.then(response => response.json())
						.then(data => actions.setCharacters(data))
						setStore({})
						.catch(error => console.log(error));
						
				
					fetch("https://hp-api.onrender.com/api/spells")
						.then(response => response.json())
						.then(data => actions.setSpells(data))
						.catch(error => console.log(error));
				}
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
