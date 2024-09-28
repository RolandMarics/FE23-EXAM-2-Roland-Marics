let prioritys = [
  {
    name: "Rome",
    image: "dandelion-7494550_1280.webp",
    priorityLevel: 0,
  },
  {
    name: "Madrid",
    image: "dandelion-7494550_1280.webp",
    priorityLevel: 0,
  },
  {
    name: "Vienna",
    image: "dandelion-7494550_1280.webp",
    priorityLevel: 0,
  },
  { name: "Budapest", image: "dandelion-7494550_1280.webp", priorityLevel: 0 },
  {
    name: "Beograd",
    image: "dandelion-7494550_1280.webp",
    priorityLevel: 0,
  },
  {
    name: "Zadar",
    image: "dandelion-7494550_1280.webp",
    priorityLevel: 0,
  },
  {
    name: "Berlin",
    image: "dandelion-7494550_1280.webp",
    priorityLevel: 0,
  },
  {
    name: "Bukarest",
    image: "dandelion-7494550_1280.webp",
    priorityLevel: 0,
  },
  {
    name: "Sofia",
    image: "dandelion-7494550_1280.webp",
    priorityLevel: 0,
  },
];

console.log(prioritys);

for (let item of prioritys) {
  document.getElementById("result").innerHTML += `
    <div>
<div class="card" style=" width: 18rem; margin:auto; box-shadow: 2px 8px 8px 2px black; background-color:whitesmoke;">
<button class="btn btn-primary likeBtns likes" style="; background-color:rgb(154, 99, 29); width: 65px; margin:10px">Task</button>
  <img src="./images/${item.image}" "class="card-img-top" alt="..">
   <div class="card-body">
    <h5 class="card-title" style="text-align:center;">${item.name}</h5>
    <p class="card-text" style="text-align:center;">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> <hr>
    <p class="card-text"><i class="fa-solid fa-triangle-exclamation"></i> Priority Level: <span class="likesNum likesBg bg-success p-1 ">${item.priorityLevel}</span></p>
    <p class="card-text"><i class="fa-solid fa-calendar-days"></i> Deadline: 29.09.2024</p>
  </div>
</div>
    </div>
      `;
}

let likeBtns = document.querySelectorAll(".likeBtns");

likeBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    if (prioritys[index].priorityLevel < 5) {
      prioritys[index].priorityLevel ++;
      console.log(prioritys[index]);
      document.querySelectorAll(".likesNum")[index].innerText =
        prioritys[index].priorityLevel;
      if (prioritys[index].priorityLevel <= 1) {
        document.querySelectorAll(".likesBg")[index].classList.add("success");
      } else if (prioritys[index].priorityLevel <= 3) {
        document
          .querySelectorAll(".likesBg")
          [index].classList.replace("bg-success", "bg-warning");
      } else {
        document
          .querySelectorAll(".likesBg")
          [index].classList.replace("bg-warning", "bg-danger");
      }
    }
  });
});

