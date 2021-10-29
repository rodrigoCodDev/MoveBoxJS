var box = document.getElementById("box")
 
document.body.addEventListener("click", function(event) {
    let x = event.clientX
    let y = event.clientY
    let boxPosition = box.getBoundingClientRect()

    let height = document.body.clientHeight
    let width = document.body.clientWidth

    if (boxPosition.x < x) {
        // Right (Direita)
        box.style.left = (boxPosition.x + 20) + "px"
        
        boxPosition = box.getBoundingClientRect()
        if (boxPosition.x + boxPosition.width >= width) {
            box.style.left = (width - boxPosition.width) + "px"
        }

    } else {
        // Left (Esquerda)
        box.style.left = (boxPosition.x - 20) + "px"
    }
    
    if (boxPosition.y > y) {
        // Top (Cima)
        box.style.top = (boxPosition.y - 20) + "px"
        
    } else {
        // Bottom (Baixo)
        box.style.top = (boxPosition.y + 20) + "px"

        boxPosition = box.getBoundingClientRect()
        if (boxPosition.y + boxPosition.height >= height) {
            console.log("dsada")
            box.style.top = (height - boxPosition.height) + "px"
        }
    }
})