
const book = document.querySelector(".book");
const paper1 = document.querySelector("#p1");
const switchBtn = document.querySelector("#cb");


const openBook = () => {
    book.style.transform = "translateX(50%)";
    paper1.classList.add("flipped");

}

const closeBook = () => {
    book.style.transform = "translateX(0%)";
    paper1.classList.remove("flipped");
}



switchBtn.addEventListener("click",() => {
    if(switchBtn.checked===true)
    {
        openBook();

    }
    else {
        closeBook();
    }
})

let list1 = [];
	
window.onload = () => {
    let valori =  JSON.parse(localStorage.getItem("inregistrari"))
    if (valori){
        valori.map(rand => {
            AddRow(rand)
        })
    }
    
}
    
		const AddRow = (row={}) => {

			let AddRown = document.getElementById("show");
			let NewRow = AddRown.insertRow(-1);

            const numartelefon = row.telefon || document.getElementById("telefon").value
            let mesaj = document.getElementById("message")
            console.log(Object.keys(row).length)
            if (Object.keys(row).length === 0) {

           
            if (!list1.every(prieten => numartelefon !== prieten.telefon))
            {
                mesaj.innerHTML = "Acest prieten este adaugat deja in agenda."
                mesaj.classList.remove("approved-message");
                mesaj.classList.add("error-message");
                
                return
            } else {
                
                mesaj.innerHTML = "Prietenul a fost adaugat cu succes!"
                mesaj.classList.remove("error-message")
                mesaj.classList.add("approved-message")
                
            }
        }

            list1.push({

                nume: row.nume || document.getElementById("nume").value,
                prenume : row.prenume || document.getElementById("prenume").value,
                telefon: row.telefon || document.getElementById("telefon").value,
		        email: row.email || document.getElementById("email").value,
                datanasterii: row.datanasterii || document.getElementById("datanasterii").value,
                autovehicul : row.autovehicul || document.getElementById("autovehicul").value,
                inghetata : row.inghetata || document.getElementById("inghetata").value
                
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
         
            if(Object.keys(row).length === 0) {
                localStorage.setItem("inregistrari", JSON.stringify(list1))
            }
		}

        const form = document.getElementById("myForm");
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            AddRow();
        });

        const clearBtn=document.getElementById("clearbtn");

        clearBtn.addEventListener("click", () =>{
            
            localStorage.clear();
            window.location.reload();

           
        })