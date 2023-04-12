$(document).ready(function () {
  ocultarCajas();
  $("#ocultar").hide();
  mostrar();
  ocultar();
  todoEnUno();
});

function ocultarCajas() {
  $("div").hide();
  /* $("#cajita").hide();
    $("#cajita1").hide();
    $("#cajita2").hide();
    $("#cajita3").hide();
    $("#cajita4").hide();
    $("#cajita5").hide();
    $("#cajita6").hide();
    */
}

function mostrar() {
  $("#mostrar").click(function () {
    $(this).hide();
    $("div").addClass("cajita");
    /*$("#cajita").addClass("cajita");
    $("#cajita1").addClass("cajita");
    $("#cajita2").addClass("cajita");
    $("#cajita3").addClass("cajita");
    $("#cajita4").addClass("cajita");
    $("#cajita5").addClass("cajita");
    $("#cajita6").addClass("cajita");
    */
    $("#ocultar").show();
    $("#cajita").show("fast");
    $("#cajita1").fadeIn("slow");
    $("#cajita2").fadeTo("fast", 0.8);
    $("#cajita3").slideDown("fast"); // muestra el elemento
  });
}

function ocultar() {
  $("#ocultar").click(function () {
    $(this).hide();
    $("#mostrar").show();
    $("#cajita").hide("slow"); // oculta con display none con un efecto como si se guardara
    $("#cajita1").fadeOut("slow"); // oculta con display none con un efecto como que se desvanece
    $("#cajita2").fadeTo("fast", 0.1); // oculta de acuerdo a la opacidad
    $("#cajita3").slideUp("fast"); // oculta el elemento
  });
}
function todoEnUno() {
  $("#todoEnUno").click(function () {
    $("#cajita4").fadeToggle("fast"); // muestra y oculta el elemento
    $("#cajita5").slideToggle("fast"); // muestra y oculta el elemento
    $("#cajita6").toggle("fast"); // muestra y oculta el elemento
  });
}
