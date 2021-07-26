$(document).ready(function () {
  $("#designImg").click(function () {
    $("#designInfo").show();
    $("#designImg").hide();
  });
  $("#designInfo").click(function () {
    $("#designImg").show();
    $("#designInfo").hide();
  });
  $("#developmentImg").click(function () {
    $("#developmentInfo").show();
    $("#developmentImg").hide();
  });
  $("#developmentInfo").click(function () {
    $("#developmentImg").show();
    $("#developmentInfo").hide();
  });
  $("#productionImg").click(function () {
    $("#productionInfo").show();
    $("#productionImg").hide();
  });
  $("#productionInfo").click(function () {
    $("#productionImg").show();
    $("#productionInfo").hide();
  });
});

$(document).ready(function () {
  $("#portfolio1")
    .mouseenter(function () {
      $("#overlay1").show();
    })
    .mouseleave(function () {
      $("#overlay1").hide();
    });
  $("#portfolio2")
    .mouseenter(function () {
      $("#overlay2").show();
    })
    .mouseleave(function () {
      $("#overlay2").hide();
    });
  $("#portfolio3")
    .mouseenter(function () {
      $("#overlay3").show();
    })
    .mouseleave(function () {
      $("#overlay3").hide();
    });
  $("#portfolio4")
    .mouseenter(function () {
      $("#overlay4").show();
    })
    .mouseleave(function () {
      $("#overlay4").hide();
    });
  $("#portfolio5")
    .mouseenter(function () {
      $("#overlay5").show();
    })
    .mouseleave(function () {
      $("#overlay5").hide();
    });
  $("#portfolio6")
    .mouseenter(function () {
      $("#overlay6").show();
    })
    .mouseleave(function () {
      $("#overlay6").hide();
    });
  $("#portfolio7")
    .mouseenter(function () {
      $("#overlay7").show();
    })
    .mouseleave(function () {
      $("#overlay7").hide();
    });
  $("#portfolio8")
    .mouseenter(function () {
      $("#overlay8").show();
    })
    .mouseleave(function () {
      $("#overlay8").hide();
    });
});

$(document).ready(function () {
  $("form[name='contactForm']").validate({
    rules: {
      fName: "required",
      email: {
        required: true,
        email: true,
      },
      messageContent: "required",
    },

    messages: {
      fName: "Please enter your Full Name",
      email: "Please enter a valid email address",
      messageContent: "Please ener your message",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
