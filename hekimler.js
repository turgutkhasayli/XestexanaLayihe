const searchInput = document.getElementById("searchInput");

const specialityFilter =
document.getElementById("specialityFilter");

const cards =
document.querySelectorAll(".card");

function filterDoctors(){

    const searchValue =
    searchInput.value.toLowerCase();

    const specialityValue =
    specialityFilter.value;

    cards.forEach(card=>{

        const doctorName =
        card.dataset.name.toLowerCase();

        const doctorSpeciality =
        card.dataset.speciality;

        const matchesSearch =
        doctorName.includes(searchValue);

        const matchesSpeciality =
        specialityValue === "all" ||
        doctorSpeciality === specialityValue;

        if(matchesSearch && matchesSpeciality){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

}

searchInput.addEventListener(
    "keyup",
    filterDoctors
);

specialityFilter.addEventListener(
    "change",
    filterDoctors
);

/* BUTTON */

const buttons =
document.querySelectorAll(".book-btn");

buttons.forEach(button=>{

    button.addEventListener("click", ()=>{

        alert("Görüş uğurla təyin edildi!");

    });

});
