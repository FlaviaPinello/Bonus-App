const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);


const ageCardGen = (data) =>{
  const cardEl = cE ("div");
  const nameEl = cE("h3");
  const phoneEl = cE("p");
  const ageEl = cE("p");
  const imgEl = cE("img");
  const image = ("https://i.pravatar.cc/300/300");


  cardEl.setAttribute("id", data.id);
  cardEl.className = "users";
  imgEl.setAttribute ("src", image );
  imgEl.setAttribute("alt",`image`);
  nameEl.textContent =  data.name;
  phoneEl.textContent = "Tel.: " + (data.phone);
  ageEl.textContent =  "Età: " + data.year + " anni";
  cardEl.append( nameEl,imgEl,phoneEl,ageEl);
  return cardEl;
};



export { qS, qSA, cE, ageCardGen };




