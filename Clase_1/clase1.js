<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Cervezas -La Tasca Licoreria</title>

    <!--Bootsrap -->

    <!-- Google Fonts -->

    <!-- Mi CSS -->
    <link rel="stylesheet" type="text/css" href="./css/styles.css">

    <!-- jQuery -->
    <script src="./js/external/jQuery/jquery-3.6.0.js"></script>

</head>

<body>

    <header>
        <div class="logo">
            <a href="index.html">
                <img src="./img/logo.jpeg" alt="Imagen Logo">
            </a>

        </div>
        <div class="navb">
            <ul class="menu">
                <div class="subnav">
                    <li class=""><a href="vinos.html">Vinos <span class="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></a></li>
                    <div class="subnav-content">
                        <a href="#company">Company</a>
                        <a href="#team">Team</a>
                        <a href="#careers">Careers</a>
                    </div>
                </div>
                <div class="subnav">
                    <li class="subnavbtn"><a href="cervezas.html">Cervezas  <span class="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></a> </li>
                    <div class="subnav-content">
                        <a href="#company">Company</a>
                        <a href="#team">Team</a>
                        <a href="#careers">Careers</a>
                    </div>
                </div>
                <div class="subnav">
                    <li class="subnavbtn"><a href="whiskys.html">Whiskys  <span class="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></a> </li>
                    <div class="subnav-content">
                        <a href="#company">Company</a>
                        <a href="#team">Team</a>
                        <a href="#careers">Careers</a>
                    </div>
                </div>
                <div class="subnav">
                    <li class="subnavbtn"><a href="otros.html">Otros productos  <span class="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false"></span></a> </li>
                    <div class="subnav-content">
                        <a href="#company">Company</a>
                        <a href="#team">Team</a>
                        <a href="#careers">Careers</a>
                    </div>
                </div>
                <div class="subnav">
                    <li><a href=""> Nosotros</a></li>
                </div>
                <div class="subnav">
                    <li><a href=""> Contacto</a></li>
                </div>



            </ul>
            <div onclick="onClickBurgerAnimation(event)" class="Burger-Menu">
                <div class=""></div>
                <div class=""></div>
                <div class=""></div>
            </div>
            <ul class="MobileNav">
                <div class="subnavMobile">
                    <li class="EnlaceSubMenu"><a href="vinos.html">Vinos </a>
                        <div onclick="OpenSubMenu(event)" class="BottomOpenSUbMenus"> <span class="iconify arrowSubMnu" data-icon="dashicons:arrow-down-alt2" data-inline="false" data-rotate="270deg"></span></div>
                    </li>
                    <div class="subnav-content-Mobile">
                        <div class="SubNav-links">
                            <a href="#company">Company</a>
                            <a href="#team">Team</a>
                            <a href="#careers">Careers</a>
                        </div>
                    </div>
                </div>
                <div class="subnavMobile">
                    <li class="EnlaceSubMenu"><a href="cervezas.html">Cervezas</a>
                        <div onclick="OpenSubMenu(event)" class="BottomOpenSUbMenus"> <span class="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false" data-rotate="270deg"></span></div>
                    </li>

                    <div class="subnav-content-Mobile">
                        <div class="SubNav-links">
                            <a href="#company">Company</a>
                            <a href="#team">Team</a>
                            <a href="#careers">Careers</a>
                        </div>
                    </div>
                </div>
                <div class="subnavMobile">
                    <li class="EnlaceSubMenu"><a href="whiskys.html">Whiskys</a>
                        <div onclick="OpenSubMenu(event)" class="BottomOpenSUbMenus"> <span class="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false" data-rotate="270deg"></span></div>
                    </li>
                    <div class="subnav-content-Mobile">
                        <div class="SubNav-links">
                            <a href="#company">Company</a>
                            <a href="#team">Team</a>
                            <a href="#careers">Careers</a>
                        </div>
                    </div>
                </div>
                <div class="subnavMobile">
                    <li class="EnlaceSubMenu"><a href="otros.html">Otros productos</a>
                        <div onclick="OpenSubMenu(event)" class="BottomOpenSUbMenus"> <span class="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false" data-rotate="270deg"></span></div>
                    </li>
                    <div class="subnav-content-Mobile">
                        <div class="SubNav-links">
                            <a href="#company">Company</a>
                            <a href="#team">Team</a>
                            <a href="#careers">Careers</a>
                        </div>
                    </div>
                </div>
                <div class="subnavMenuBurger">
                    <li><a href=""> Nosotros</a></li>
                </div>
                <div class="subnavMenuBurger">
                    <li><a href=""> Contacto</a></li>
                </div>



            </ul>
        </div>
    </header>
    <!-- Fin Header -->

    <!-- Inicio Home -->
    <section>
        <article>
            <div class="IconsNav">

                <li>
                    <a href=""> <span class="iconify" data-icon="uil:instagram" data-inline="false"></span></a>
                </li>

                <li>
                    <a> <span class="iconify" data-icon="logos:facebook" data-inline="false"></span></a>
                </li>
            </div>
        </article>
    </section>
    <!-- Fin Home -->


    <!-- Inicio Acerca Nuestro  -->
    <section class="nosotros">

    </section>

    <!-- Fin Acerca Nuestro  -->

    <!-- Inicio Footer -->
    <footer>

    </footer>
    <!-- Fin Footer -->

    <!-- Iconify -->
    <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>

    <!-- Scripts -->

    <script src="./js/src/script.js"></script>
</body>

</html>