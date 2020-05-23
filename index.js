const searchMeal = document.getElementById("searchMeal");
const mealInput = document.getElementById("mealInput"),
keyword = document.getElementById("keyword");

function handleSubmit(e){
    e.preventDefault();
    console.log(mealInput.value);
    keyword.innerHTML = `"${mealInput.value}" 검색결과`;
    axios.get("http://211.237.50.150:7080/openapi/5bc6c1114d787038aaded73920b3ac1242a0ef147f8d69b4f872188180544c76/json/Grid_20150827000000000226_1/1/1000").then(
        (res) => {
            console.log(res)
        }
    )
    
    
}

function init(){
    searchMeal.addEventListener("submit", handleSubmit);
}

init();