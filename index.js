function createFirefly() {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");

    firefly.style.left = Math.random() * 100 + "vw";
    firefly.style.top = Math.random() * 100 + "vh";
    firefly.style.animationDuration = Math.random() * 4 + 2 + "s";

    document.querySelector(".firefly-container").appendChild(firefly);

    setTimeout(() => {
        firefly.remove();
    }, 6000);
}

// Generate fireflies every 500ms
setInterval(createFirefly, 500);
