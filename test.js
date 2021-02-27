const whiteBoxes = document.getElementsByClassName('whiteBox');

const imgBox = document.querySelector(".imgBox");

imgBox.addEventListener("dragstart", (e) => {

    console.log("drag start");

    e.target.className += " hold";

    setTimeout(() => {
        e.target.className = 'hidden'
    }, 0)


})




for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener("dragover", (e) => {
        console.log("dragover");

        e.preventDefault();
    })

    whiteBox.addEventListener("dragenter", (e) => {
        console.log("dragenter");

        e.target.className += " dashed";
    })
    whiteBox.addEventListener("dragend", (e) => {
        console.log("dragend");

        e.target.className = "imgBox";
    })

    whiteBox.addEventListener("dragleave", (e) => {
        console.log("dragleave");

        e.target.className = "whiteBox"
    })




    whiteBox.addEventListener("drop", (e) => {
        console.log("drop");

        e.target.append(imgBox);


    })




}