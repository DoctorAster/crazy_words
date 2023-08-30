
const button.getElementById("name_button");
button.addEventListener("click", AcceptName);

function AcceptName() {
  name_div = document.getElementById("hello");
  name_input = document.getElementById("name");
  name_div.setAttribute("hidden", "hidden");
  user_name=name_input.value;
}
