const adventureCtrElem = document.getElementById('adventure');
const localStorageClicksDark = localStorage.getItem('clickStorageDark');
let adventureCtr = JSON.parse(localStorageClicksDark);

const comfortCtrElem = document.getElementById('comfort');
const localStorageClicksLight = localStorage.getItem('clickStorageLight');
let comfortCtr = JSON.parse(localStorageClicksLight);


function darkCtr() {
    adventureCtr +=1;
    const JSONClickCtr = JSON.stringify(adventureCtr);
    console.log({JSONClickCtr});
    localStorage.setItem('clickStorageDark', JSONClickCtr);
  };

adventureCtrElem.addEventListener('click', darkCtr);


function lightCtr() {
    comfortCtr +=1;
    const JSONClickCtr = JSON.stringify(comfortCtr);
    console.log({JSONClickCtr});
    localStorage.setItem('clickStorageLight', JSONClickCtr);
  };

comfortCtrElem.addEventListener('click', lightCtr);





