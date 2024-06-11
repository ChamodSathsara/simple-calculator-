let display = $("#display");
const buttons = $(".num");
const operator = $(".operator");

$(".num").on("click", function () {
  let value = $(this).val();
  console.log(value);
  appendToDisplay(value);
});

$(".operator").click(function (e) {
  let value = $(this).val();

  if (value === "C") {
    clearDisplay();
  } else if (value === "=") {
    calculateResult();
  } else {
    appendToDisplay(value);
  }
});

function clearDisplay() {
  display.val("");
}

function appendToDisplay(value) {
  display.val(display.val() + "" + value);
}

function calculateResult() {
  try {
    const result = eval(display.val());
    display.val(result);
  } catch (error) {
    display.val("Error");
  }
}
