// 1. replace blue filter button with red
// 2. add green filter button
// 3. add notes
// 4. capitalize names
// 5. add dropdown menu
// 6. search box for ID


console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} 
	else if (event.target.id === "showGreen") {
		filterLegos("Green")
	}	
	else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();




	navElement.addEventListener("change", event => {
		if (event.target.id === "sort-material") {
			const selectedMaterial = event.target.value
			showFilteredMaterials(selectedMaterial)
		}
	})

	const showFilteredMaterials = (block) => {
		const filterByMaterial = useLegos().filter(singleMaterial =>{
			if (singleMaterial.Material === block) {
				return singleMaterial
			}
		})
		makeLegoList(filterByMaterial);
	}

const searchElement = document.querySelector("#showID")

searchElement.addEventListener("keyup", (event) => {
	if (event.keyCode === 13) {
		const searchId = (searchElement.value);
		showSearchedId(searchId)

	}
})

const showSearchedId = (lego) => {

	const filterById = useLegos().filter (singleId => {
		if (singleId.LegoId === lego){
			return singleId;
		}
	})
	makeLegoList(filterById);
}