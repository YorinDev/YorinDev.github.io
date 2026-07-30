const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");


function search(){

    let value = searchInput.value.toLowerCase();


    let pages = {

        "string":"JAVA/string.html",
        "int":"JAVA/int.html",
        "double":"JAVA/double.html",
        "float":"JAVA/float.html",
        "scanner":"JAVA/scanner.html",
        "random":"JAVA/random.html",
        "conditions":"JAVA/conditions.html",
        "operateurs logique":"JAVA/operateursLogique.html",
        "substrings":"JAVA/substrings.html"

    };


    for(let name in pages){

        if(value.includes(name)){

            window.location.href = pages[name];

            return;

        }

    }


    alert("Aucune fiche trouvée.");

}


searchButton.addEventListener("click", search);


searchInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        search();

    }

});
