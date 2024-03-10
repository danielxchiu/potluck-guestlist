//he value of assignButton should select the element with the assign class which only appears when the guest list is full.
const assignButton = document.querySelector(".assign");
//the value of assignedItems should select the element with the  assigned-items class which targets the list that will populate with the guest’s name and their assigned dish.
const assignedItems = document.querySelector(".assigned-items");

const addGuestButton = document.querySelector(".invite");
const guestInputLabel = document.querySelector(".add-guest label");
const guestInput = document.querySelector(".add-guest input");
const guestList = document.querySelector(".guest-list");
const guestCount = document.querySelector(".attendance");
const guestFull = document.querySelector(".alert");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "gimbap",
    "halloumi melon skewers",
    "zucchini pasta",
    "potato salad",
    "aloo chop",
    "aloo dham",
    "aloo paratha",
    "fried chicken wings",
    "couscous salad",
    "ras malai",
    "samosas",
    "ghora dishes"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");
  // Below the allGuests variable, write a for...of loop to loop over the allGuests array using guest as the variable:
  for (let guest of allGuests) {
    //generate a number between 0 and the length of potluckItems to select a random element from the array:
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    //declare a variable called randomPotluckItem. In the value, add the item from the potluckItems array at the index position of randomPotluckIndex.
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    //create a variable called listItem. As the value, create a new "li" element
    let listItem = document.createElement("li");
    //Set the innerText of listItem to a string with the guest name and item the person is bringing:
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    //write the assignedItems variable and append the listItem variable to it
    assignedItems.append(listItem);
    //attach splice() to potluckItems. Inside the method, give a value of 1 for randomPotluckIndex so it won’t be assigned to someone else:
    potluckItems.splice(randomPotluckIndex, 1);
  }
};
//write an event listener for a click on the assignButton element. Inside the function body, call the assignItems function.
assignButton.addEventListener("click", function () {
  assignItems();
  // add code to disable the button once the loop completes using the disabled property and the boolean
  assignButton.disabled = true;
});
