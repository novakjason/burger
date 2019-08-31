// object containing methods for each kind of request made to the API
let API = {

    getBurgers: () => {
        return $.ajax({
            url: "api/burgers",
            type: "GET"
        });
    },

    saveBurger: burger => {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/burgers",
            data: JSON.stringify(burger)
        });
    }
};

// function to use AJAX request to GET burgers from the database and populate the Hot-n-Ready! list
let showBurgers = () => {
    
    // AJAX call
    API.getBurgers().then(data => {

        // jquery to show list on DOM with burger name and button
        let $burgers = data.map(burger => {

            let $li = $("<li>")
                .attr({
                    class: "d-inline-flex list-group-item list-group-item-dark mb-2",
                    "data-id": burger.id
                });
            let $h5 = $("<h5>")
                .text(burger.burger_name);
            $li.append($h5);
            let $button = $("<button>")
                .addClass("btn btn-success eat")
                .text("eat me");
            $li.append($button);
            return $li;
        });

        // used to clear Hot-n-ready! before updating DOM with a new list
        $("#burger-list").empty();
        $("#burger-list").append($burgers);
    });
};

// function to use ajax request to POST the new burger to the database and refresh the Hot-n-Ready! list
let cookBurger = event => {

    event.preventDefault();

    // pushing burger_name to burger object
    let burger = {
        burger_name: $("#burgerName").val().trim()
    };

    // front-end form validation  * back-end form validation is built into the Burger model - burger_name:{allowNull:false,validate:{len:[1]}} *
    if (!(burger.burger_name)) {
        alert("You must enter a name for your burger!");
        return;
    }

    // passing new burger name through AJAX call to POST to database
    API.saveBurger(burger);

    // showing new list
    showBurgers();

    // clearing the form
    $("#burgerName").val("");
};

// event listener for the cook button
$("#cook").on("click", cookBurger);