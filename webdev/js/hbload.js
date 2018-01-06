$.get("/webdev/hb.html", function(data) {
  $("#hb-placeholder").replaceWith(data);
});
