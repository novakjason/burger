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