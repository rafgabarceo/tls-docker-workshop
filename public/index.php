<?php
    $post_id = getenv("POST_ID");
    setcookie("post_id", $post_id, [
    'samesite' => 'None',
    'secure' => true,
]);
?>
<html>
    <head>
	<title>
	    Hello, TLS!
	</title>
    </head>
    <body>
	<tt>Loading...</tt>
	<div id="title-wrapper">

	</div>
	<div id="content-wrapper">
	    <div id="author-wrapper">

	    </div>
	</div>
    <script src="/js/bundle.js"></script>
    </body>
</html>
