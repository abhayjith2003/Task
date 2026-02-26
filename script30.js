function changecolor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color=color+letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    document.getElementById("colorCode").textContent = color;
}