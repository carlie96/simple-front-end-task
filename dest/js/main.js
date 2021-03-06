(function () {
  // everything on document ready
  $(document).ready(function () {
    $(".slider").slick();

    const HAMBURGER_ICON = `
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="344 20 10 10">
        <g data-name="Group 59">
        <path d="m344 30 10-10" stroke-linejoin="round" stroke-linecap="round" stroke="#498fcc" fill="transparent"
          data-name="Line 2" />
        <path d="m344 20 10 10" stroke-linejoin="round" stroke-linecap="round" stroke="#498fcc" fill="transparent"
          data-name="Line 4" />
      </g>
    </svg>`;
    const CLOSE_ICON = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="338 20 16 10">
          <g data-name="Group 59">
            <path d="M338 20h16" stroke-linejoin="round" stroke-linecap="round" stroke="#498fcc" fill="transparent"
              data-name="Line 2" />
            <path d="M338 25h16" stroke-linejoin="round" stroke-linecap="round" stroke="#498fcc" fill="transparent"
              data-name="Line 3" />
            <path d="M338 30h16" stroke-linejoin="round" stroke-linecap="round" stroke="#498fcc" fill="transparent"
              data-name="Line 4" />
          </g>
        </svg>`;

    // Toggler button state
    let navState = false;
    $("#navBarTogglerButton").on("click", function () {
      this.innerHTML = navState ? CLOSE_ICON : HAMBURGER_ICON;
      navState = !navState;
    });

    // News Today AJAX
    $.ajax({
      type: "GET",
      url: "http://localhost:3000",
      dataType: "json",
      success: function (data) {
        $("#news-container").innerHTML = "";
        $.each(data, function (_, element) {
          $("#news-container").append(
            `<h2>${element.date}</h2>
            <h3>${element.headline}</h3>
            <hr/>
            `
          );
        });
      },
      error: function (error, text, thrown) {
        //TODO Error handling
      },
    });
  });
})();
