const item = document.querySelector('#item')
const todobox = document.querySelector('#todo-box')
item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter")
         {
            addtodo(this.value);
            this.value = "";
        }


    }
)
const addtodo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
    
            <i class="fa-regular fa-circle-xmark"></i>
        
    `;
    listItem.querySelector("i").addEventListener(
        "click",
        function () {
            listItem.remove()
        }
    )
    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");

        }

    )

    todobox.appendChild(listItem)
}