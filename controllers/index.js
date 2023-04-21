function home(req, res) {
  res.render("index", { title: "Weekly Meal Planner" });
}

module.exports = {
  home,
};
