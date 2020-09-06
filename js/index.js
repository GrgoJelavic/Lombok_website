let isSidebarOpen = false;

function onSidebarToggle() {
    const sidebarRef = document.getElementById("sidebar-container");
    isSidebarOpen = !isSidebarOpen;

    if (isSidebarOpen) {
        sidebarRef.classList.add("sidebar-open");
    } else {
        sidebarRef.classList.remove("sidebar-open");
    }
}