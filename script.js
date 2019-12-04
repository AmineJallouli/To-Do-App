function NewElemnt() {
        let a = document.getElementById("txt").value
        var li = document.createElement("li");
        let t = document.createTextNode(a);
        li.appendChild(t)
        document.getElementById("list").appendChild(li)

        var btn1 = document.createElement("span")
        let t1 = document.createTextNode("Complete")
        btn1.className = "complete"
        btn1.appendChild(t1)
        li.appendChild(btn1)
        document.getElementById("list").appendChild(li)

        var btn2 = document.createElement("span")
        let t2 = document.createTextNode("Delete")
        btn2.className = "delete"
        btn2.appendChild(t2)
        li.appendChild(btn2)
        document.getElementById("list").appendChild(li)
        complete()
        supprimer()
}


function complete() {
        let a = document.getElementsByClassName("complete")
        for (let i = 0; i < a.length; i++) {
                a[i].onclick = function () {
                        var li = this.parentElement
                        li.style.textDecoration = "line-through"
                        a[i].innerHTML = "undo"

                }
        }
}

function supprimer() {
        let b = document.getElementsByClassName("delete")
        for (let i = 0; i < b.length; i++) {
                b[i].onclick = function () {
                        var li = this.parentElement
                        li.style.display = "none";
                }
        }
}






