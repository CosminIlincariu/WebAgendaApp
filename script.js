const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector(".book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = 2;



const openBook = () => {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-400px)";
    nextBtn.style.display = "none";
    paper1.classList.add("flipped");
}

const closeBook = () => {
    book.style.transform = "translateX(0%)";
    prevBtn.style.transform= "translateX(0px)";
    nextBtn.style.display= "block";
    paper1.classList.remove("flipped")
}

prevBtn.addEventListener("click",closeBook);
nextBtn.addEventListener("click",openBook);


let list1 = [];
	


		const AddRow = () => {

			let AddRown = document.getElementById("show");
			let NewRow = AddRown.insertRow(-1);

            list1.push({
                nume: document.getElementById("nume").value,
                prenume : document.getElementById("prenume").value,
                telefon: document.getElementById("telefon").value,
		        email :document.getElementById("email").value,
                datanasterii: document.getElementById("datanasterii").value,
                autovehicul : document.getElementById("autovehicul").value,
                inghetata : document.getElementById("inghetata").value
                
            })

			let cel1 = NewRow.insertCell(0);
			let cel2 = NewRow.insertCell(1);
			let cel3 = NewRow.insertCell(2);
		    let cel4 = NewRow.insertCell(3);
            let cel5= NewRow.insertCell(4);
            let cel6 = NewRow.insertCell(5);
            let cel7 = NewRow.insertCell(6);


			cel1.innerHTML = list1[list1.length-1].nume;
			cel2.innerHTML = list1[list1.length-1].prenume;
			cel3.innerHTML = list1[list1.length-1].telefon;
			cel4.innerHTML = list1[list1.length-1].email;
			cel5.innerHTML = list1[list1.length-1].datanasterii;
			cel6.innerHTML = list1[list1.length-1].autovehicul;
			cel7.innerHTML = list1[list1.length-1].inghetata;
         
      

		}

        const addBtn = document.getElementById("btn");
        addBtn.addEventListener("click", AddRow);