let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
