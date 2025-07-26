  const menuBtn = document.getElementById("menuBtn");
  const navItems = document.getElementById("navItems");

  // Toggle nav visibility
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling to body
    navItems.classList.toggle("show");
  });

  // Close on outside click
  document.body.addEventListener("click", (e) => {
    if (!navItems.contains(e.target) && !menuBtn.contains(e.target)) {
      navItems.classList.remove("show");
    }
  });
