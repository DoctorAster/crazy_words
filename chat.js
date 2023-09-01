const button=document.getElementById("name_button");
const snd_button = document.getElementById("send_button");

button.addEventListener("click", AcceptName);
snd_button.addEventListener("click", SendMessage);

function AcceptName() {
    hello_div = document.getElementById("hello");
    name_input = document.getElementById("name");
    hello_name_div=document.getElementById("hello_name_div");
    hello_name=document.getElementById("hello_name");
    user_name=name_input.value;
    if (user_name.trim() == "") {
        alert("Поле с именем не может быть пустым!")
    }
    else {
    attribute=hello_div.setAttribute("hidden", "hidden");
    hello_name.innerText="Приветствуем Вас, " + user_name;
    hello_name_div.removeAttribute("hidden");
    check_text=hello_name.innerText;
    }
function SendMessage () {
    message = document.getElementById("message").value;
    document.getElementById("message").value = "";
    
}
