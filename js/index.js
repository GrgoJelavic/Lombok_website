let isSidebarOpen = false;

function onSidebarToggle() {
    const sidebarRef = document.getElementById("sidebar-container");
    const titleRef = document.getElementById("title-container")
    const toggleRef = document.getElementById("toggle-container")
    isSidebarOpen = !isSidebarOpen;

    if (isSidebarOpen) {
        sidebarRef.classList.add("sidebar-open");
        titleRef.classList.add("remove-title")
        toggleRef.classList.add("toggle-background");

    } else {
        sidebarRef.classList.remove("sidebar-open");
        titleRef.classList.remove("remove-title")
        toggleRef.classList.remove("toggle-background");

    }
}