document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href]");

    links.forEach(function (link) {
        const href = link.getAttribute("href");

        if (
            href.startsWith("http://") ||
            href.startsWith("https://")
        ) {
            const linkUrl = new URL(href);
            const currentHost = window.location.hostname;

            if (linkUrl.hostname !== currentHost) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer");
            }
        }
    });
});
