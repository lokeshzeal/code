body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5; /* Light background */
}

.line-container {
    display: flex;
    gap: 10px; /* Use the gap property for uniform spacing */
}

.line, .custom-shape {
    margin: 0; /* Remove any default margins */
}

.line {
    height: 50px;
    background-color: #007bff; /* Blue color */
    transform: skewX(30deg); /* Angled effect for slim lines */
}

.slim {
    width: 30px; /* Slimmer width for the first two lines */
}

.custom-shape {
    width: 200px;
    background-color: #007bff; /* Blue color */
    /* Custom shape with slant on the left and straight on the right */
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%);
}





body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5; /* Light background */
}

.line-container {
    display: flex;
    gap: 10px; /* Use the gap property for uniform spacing */
}

.line, .custom-shape {
    margin: 0; /* Remove any default margins */
}

.line {
    height: 50px;
    background-color: #007bff; /* Blue color */
    transform: skewX(30deg); /* Angled effect for slim lines */
}

.slim {
    width: 30px; /* Slimmer width for the first two lines */
}

.custom-shape {
    width: 200px;
    background-color: #007bff; /* Blue color */
    /* Custom shape with slant on the left and straight on the right */
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%);
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blue Angled Lines</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="line-container">
        <div class="line slim"></div>
        <div class="line slim"></div>
        <div class="custom-shape"></div>
    </div>
</body>
</html>
