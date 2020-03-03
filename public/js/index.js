// Get references to page elements
const $burgerName = $("#burgerName");
const $cook = $("#cook");
const $eat = $(".eat");
const $delete = $(".delete");

// object containing methods for each kind of request made to the API
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
  getBurgers: function() {
    return $.ajax({
      url: "api/burgers",
      type: "GET"
    });
  },
  deleteBurger: function(id) {
    return $.ajax({
      url: "api/burgers/" + id,
      type: "DELETE"
    });
  }
};

// function to use AJAX request to GET burgers from the database and populate the Hot-n-Ready! list
const showBurgers = function() {
  // AJAX call
  API.getBurgers().then(function(data) {
    // jquery to show list on DOM with burger name and button
    const $burgers = data.map(function(burger) {
      const $a = $("<a>")
        .text(burger.name)
        .attr("href", "/burger/" + burger.id);

      const $li = $("<li>")
        .attr({
          class: "list-group-item list-group-item-dark mb-2",
          "data-id": burger.id
        })
        .append($a);

      const $delete = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");
      const $eat = $("<button>")
        .addClass("btn btn-success float-right eat")
        .text("eat");
      $li.append($delete);
      $li.append($eat);

      return $li;
    });
    // used to clear Hot-n-ready! before updating DOM with a new list
    $hotNReady.empty();
    $hotNReady.append($burgers);
  });
};

// function to use ajax request to POST the new burger to the database and refresh the Hot-n-Ready! list
let cookBurger = event => {
  event.preventDefault();
  // pushing burger_name to burger object
  let burger = {
    name: $burgerName.val().trim()
  };
  // front-end form validation  * back-end form validation is built into the Burger model - burger_name:{allowNull:false,validate:{len:[1]}} *
  if (!burger.name) {
    alert("You must enter a burger name!");
    return;
  }
  // passing new burger name through AJAX call to POST to database
  API.saveBurger(burger).then(function() {
    showBurgers();
  });
  // clearing the form
  $burgerName.val("");
};

// removes the selected burger from database and then refreshes the list
const deleteButton = function() {
  const idToDelete = $(this)
    .parent()
    .attr("data-id");
  // passing selected burger id through AJAX call and deleting burger from database
  API.deleteBurger(idToDelete).then(function() {
    showBurgers();
  });
};

// event listeners for the cook, eat, and delete buttons
$cook.on("click", cookBurger);
$delete.on("click", deleteButton);
$eat.on("click", eatButton);
