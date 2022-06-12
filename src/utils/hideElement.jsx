export default function hideElement(id) {
    // var x = document.getElementById(id);
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
    var elements = document.querySelectorAll(`[id='${id}']`);
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("href") === "https://twitter.com/cdhiraj40") {
            elements[i].style.display = 'none';
        }
    }
}