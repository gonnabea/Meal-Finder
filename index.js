/* const searchMeal = document.getElementById("searchMeal");
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

*/

const searchMeal = document.getElementById("searchMeal");
const mealInput = document.getElementById("mealInput"),
keyword = document.getElementById("keyword"),
resultArea = document.getElementById("resultArea");
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(mealInput.value);
  const api = {
    temp: () => {
      const url =
        `http://211.237.50.150:7080/openapi/5bc6c1114d787038aaded73920b3ac1242a0ef147f8d69b4f872188180544c76/json/Grid_20150827000000000226_1/1/600`;
      return fetch(proxyurl + url).then((res) => res.json());
    },
  };
  keyword.innerHTML = `"${mealInput.value}" 검색결과`;
  let data = await api.temp();
  data = data.Grid_20150827000000000226_1.row;
  console.log(data);
  let filtered = [];
  for(let i=0 ; i < data.length ; i++){
    const inspect = data[i].RECIPE_NM_KO.includes(mealInput.value);
    const inspect2 = data[i].SUMRY.includes(mealInput.value);
    const inspect3 = data[i].NATION_NM.includes(mealInput.value); 
    if(inspect === true || inspect2 === true || inspect3 === true){
      filtered.push(data[i])
    }
  }
  handleResult(filtered);
};

function handleResult(result){
  result.map( recipe => {
    const div = document.createElement("div"),
    img = document.createElement("img"),
    span = document.createElement("span")
    div.className = 'result-box';
    img.className = 'result-img';
    span.className = 'result-title';
    img.src = recipe.IMG_URL;
    span.innerHTML = recipe.RECIPE_NM_KO;
    div.appendChild(img);
    div.appendChild(span);
    resultArea.appendChild(div);
  })
}

function init() {
  searchMeal.addEventListener("submit", handleSubmit);
}

init()