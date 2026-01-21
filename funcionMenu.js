// Vuelve a estado normal: al tocar un link del menú, se cierra el drawer
    const menuToggle = document.getElementById("menuToggle");
    document.querySelectorAll(".drawer-link").forEach(link => {
      link.addEventListener("click", () => { menuToggle.checked = false; });
    });