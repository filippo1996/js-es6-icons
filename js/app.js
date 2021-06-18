/**
 * Milestone 1 
 * Partendo dalla seguente struttura dati , 
 * mostriamo in pagina tutte le icone disponibili come da layout.
 */

const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

const eleShowIcon = document.getElementById('show-icon');

/**
 * Funzione che stampa gli oggetti nell'html
 * @param {array} array 
 * @param {object} elementHTML 
 */
function print(array ,elementHTML){
  elementHTML.innerHTML = '';
    array.forEach(ele => {
        elementHTML.innerHTML += 
        `<div class="col-2 p-35">
            <div class="card">
                <i class="${ele.family} ${ele.prefix}${ele.name}" style="color:${ele.color}"></i><span class="name-icon">${ele.name}</span>
            </div>
        </div>`;
    });
}



/**
 * Milestone 2 
 * Coloriamo le icone per tipo
 */
/*
const addPropertyObj = (array, ...property) => {
    return array.map(ele => {
        const obj = 
           {
               ...ele
                
           };
        
        return obj;
    });
};

console.log(addPropertyObj(icons, 'color'));
*/

const addColorObj = icons.map(ele => {
    let color = '';
    ele.type === 'animal' ? color = 'red' 
    : ele.type === 'vegetable' ? color = 'green'
    : color = 'purple';

    const obj = 
       {
           ...ele,
           color
       };
    
    return obj;
});

print(addColorObj ,eleShowIcon);


/**
 * Milestone 3 
 * Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */


//Mostriamo i filtri menu nell'html
getElementHtmlFilter(icons);

document.getElementById('filter-selected').addEventListener('change', function(){
  const itemsFilter = addColorObj.filter(ele => this.value === ele.type);
  if(this.value !== 'all'){
    print(itemsFilter ,eleShowIcon);
  }else{
    print(addColorObj ,eleShowIcon);
  }
});



/**
 * Funzione che stampa i filtri nell'html
 * @param {array} array 
 */
function getElementHtmlFilter(array){
  const itemsType = [];

  array.forEach(ele => {
    if(!itemsType.includes(ele.type)){
      itemsType.push(ele.type);
      document.getElementById('filter-selected').innerHTML += `<option value="${ele.type}">${ele.type}</option>`;
    }
  });
}