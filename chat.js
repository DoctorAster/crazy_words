const button=document.getElementById("name_button");
button.addEventListener("click", AcceptName);

function AcceptName() {
    hello_div = document.getElementById("hello");
    name_input = document.getElementById("name");
    hello_name_div=document.getElementById("hello_name_div");
    hello_name=document.getElementById("hello_name");
    user_name=name_input.value;
    attribute=hello_div.setAttribute("hidden", "hidden");
    hello_name.innerText="Приветствуем Вас, " + user_name;
    hello_name_div.removeAttribute("hidden");
    check_text=hello_name.innerText;
}
