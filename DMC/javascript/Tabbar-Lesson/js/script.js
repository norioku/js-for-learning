$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function() {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  return false;
});

6baa51c9abb369cd0bbffaccc7e2324e