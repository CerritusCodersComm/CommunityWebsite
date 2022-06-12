
export default function hideElement(id, name) {


    var element = document.getElementById(id);

    console.log(element, name)

    if (element.getAttribute("href") === null) {
        element.style.display = "none";
    }

}


