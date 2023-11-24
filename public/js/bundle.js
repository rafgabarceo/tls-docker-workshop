let cookie = document.cookie;
let post_id = cookie.split("=");
fetch(
    `https://thelasallian.com/wp-json/wp/v2/posts/${post_id[1]}`,
    {
	method: "GET",
    }
).then(
    (res) => {
	return res.json()
    }
).then(
    (data) => {

	console.log(data);
	// Remove the loading.
	document.body.querySelector("tt").setAttribute("hidden", true);

	let title = data["title"]["rendered"];
	let author = data["authors"][0]["display_name"];
	let content = data["content"]["rendered"];
	let titleElement = document.getElementById("title-wrapper");
	let contentElement = document.getElementById("content-wrapper")
	let authorElement = document.getElementById("author-wrapper");
	let titleText = document.createElement("h1");
	let authorText = document.createElement("h2");
	let contentText = document.createElement("div");

	authorText.innerText = `by ${author}`;
	authorElement.appendChild(authorText);

	titleText.innerText = title;
	titleElement.appendChild(titleText);

	contentText.innerHTML = content;
	contentElement.appendChild(contentText);
    }
)
