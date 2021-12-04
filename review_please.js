javascript:(function () {
    if (!location.href.startsWith("https://github.com/torana-us")) {
        alert("failed");
        return;
    }
    document.getElementById("new_comment_field").value = document
		.querySelectorAll("#reviewers-select-menu")[0]
		.parentElement.children[3].innerText
		.split("\n\n")
		.map(a=>"@".concat(a))
		.sort()
	        .concat(["レビューお願いします:bow:"])
		.join(" ");
})()
