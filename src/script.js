const App_Form = document.getElementById("form");
const App_List = document.getElementById("list")
const Form_Submit = document.getElementById("submit");
const App_Input = document.getElementById("Item");
const Example = document.getElementById("example")

App_List.innerHTML = "Add Something, I'm Lonely :("

Form_Submit.addEventListener("click", () => {

    if (App_List.innerHTML === "Add Something, I'm Lonely :(" || App_List.innerHTML === "All Done!") {
        App_List.innerHTML = "";
    }

    let Item_To_Add = App_Input.value;
    let li = document.createElement("li");

    App_List.appendChild(li);
    li.textContent = Item_To_Add;

    li.addEventListener("click", () => {
        li.remove();
        if (App_List.innerHTML === "") {
            App_List.innerHTML = "All Done!"
        }
    })

    App_Input.value = "";
})