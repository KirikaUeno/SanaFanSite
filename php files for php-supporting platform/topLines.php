<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/3680e33719.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="main.css">
    <title>SanaFanSite</title>
</head>

<body>
    <nav>
        <div id="logo-img">
            <a href="index.php">
                <img src="img/appIcon.jpg" alt="logo">
                SanaFan Website
            </a>
        </div>
        <div id="CVstuff">
            <a href="#">work menu</a>
            <i id="work-expand" class="material-icons">expand_more</i>
        </div>
        <div id="hobby">
            <a href="#">hobby menu</a>
            <i id="hobby-expand" class="material-icons">expand_more</i>
        </div>
        <div id="search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search">
        </div>
    </nav>
    <menu id="work-menu" class="slide-out-menu">
        <ul>
            <li>
                <a href="cvPage.php">
                    CV
                </a>
            </li>
            <li>
                <a href="codeProjectPage.php">
                    Code Projects
                </a>
            </li>
            <li>
                <a href="scienceProjectPage.php">
                    Scientific Projects
                </a>
            </li>
            <li>
                <a href="publicationsPage.php">
                    Publications
                </a>
            </li>
        </ul>
    </menu>
    <menu id="hobby-menu" class="slide-out-menu">
        <ul>
            <li>
                <a href="javaProjectPage.php">
                    Java Game Projects
                </a>
            </li>
            <li>
                <a href="unityProjectPage.php">
                    Unity Game Projects
                </a>
            </li>
        </ul>
    </menu>