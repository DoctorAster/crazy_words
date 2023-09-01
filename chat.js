const button=document.getElementById("name_button");
const snd_button = document.getElementById("send_button");

button.addEventListener("click", AcceptName);
snd_button.addEventListener("click", SendMessage);

function AcceptName() {
    name_input = document.getElementById("name");
    user_name=name_input.value;
    if (user_name.trim() == "") {
        alert("Поле с именем не может быть пустым!")
        }
    else {
        hello_name.innerText="Приветствуем Вас, " + user_name;
        hello_name=document.getElementById("hello_name");
        
        hello_name_div=document.getElementById("hello_name_div");
        hello_name_div.removeAttribute("hidden");
        check_text=hello_name.innerText;
        
        hello_div = document.getElementById("hello");    
        attribute=hello_div.setAttribute("hidden", "hidden");

        chat_div=document.getElementById("chat_div");
        chat_div.removeAttribute("hidden");
        }
    }  
function SendMessage () {
    message = document.getElementById("message").value;
    document.getElementById("message").value = "";
    
    }
