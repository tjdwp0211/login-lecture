"user strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
}

module.exports = {
    home,
    login,
}



// render를 정확히 이해하기.