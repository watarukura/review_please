javascript:(function () {
    if (!location.href.startsWith("https://github.com/torana-us")) {
        alert("failed");
        return;
    }
    document.getElementById("new_comment_field").value = Array.from(document
		.querySelectorAll("#reviewers-select-menu")[0]
		.parentElement.children[3].querySelectorAll(".assignee")).map((elem)=> `@${elem.innerText}`).sort().concat(["レビューお願いします:bow:"]).join(" ")
})()
