// Get references to page elements
const $burgerName = $("#burgerName");
const $cook = $("#cook");
const $eat = $(".eat");
const $delete = $(".delete");

// API controller
const API = {
  saveBurger: function(burger) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/burgers",
      data: JSON.stringify(burger)
    });
  },
  eatBurger: function(id) {
    return $.ajax({
      url: "api/burgers/" + id,
      type: "PUT"
    });
  },
  deleteBurger: function(id) {
    return $.ajax({
      url: "api/burgers/" + id,
      type: "DELETE"
    });
  }
};

// function to use AJAX request to POST the new burger to the database and refresh the DOM
const cookBurger = event => {
  event.preventDefault();
  // pushing burger_name to burger object
  let burger = {
    burgerName: $burgerName.val().trim()
  };
  // front-end form validation (back-end form validation is built into the Burger model - burgerName: { allowNull:false, validate: { len:[1] } })
  if (!burger.burgerName) {
    alert("You must enter a burger name!");
    return;
  }
  // passing new burger name through AJAX call to POST to database
  API.saveBurger(burger).then(function() {
    location.reload();
  });
  // clearing the form
  $burgerName.val("");
};

//  Updates devoured status to TRUE
const eatButton = function(event) {
  event.preventDefault();
  const burgerID = $(this)
    .parent()
    .attr("data-id");
  // Passing burgerID through API controller using PUT method to update DB then reloading DOM
  API.eatBurger(burgerID).then(() => {
    location.reload();
  });
};

// removes the selected burger from database and then refreshes DOM
const deleteButton = function() {
  const idToDelete = $(this)
    .parent()
    .attr("data-id");
  // passing selected burger id through AJAX call and deleting burger from database
  API.deleteBurger(idToDelete).then(() => {
    location.reload();
  });
};

// event listeners for the cook, eat, and delete buttons
$cook.on("click", cookBurger);
$delete.on("click", deleteButton);
$eat.on("click", eatButton);
