<header class="header">
    <div class="container no-wrap">
        <div class="col-md-10 col-sd-15 col-25 no-galp">
            <a href="#" class="nav-item dspflex" id="openSideBar" onclick="showSideBar()">
                <div class="col-auto no-galp">
                    <div class="iconbox">
                        <span class="icomoon icon-boards"></span>
                    </div>
                </div>
                <div class="col-100 text no-galp not-in-sm">
                    <strong>Boards</strong>
                </div>
            </a>
        </div>
        <div class="col-40 col-sd-25 no-galp  not-in-sm">
            <div class="nav-item dspflex">
                <div class="col-auto no-galp">
                    <div class="iconbox sm flat">
                        <span class="icomoon icon-search"></span>
                    </div>
                </div>
                <div class="col-100 no-galp mrg-auto buscador">
                    <input type="text" placeholder="Search">
                </div>
            </div>
        </div>
        <div class="col-100 no-galp">
            <a class="nav-item float-right border-left flat" href="#">
                <div class="col-auto">
                    <div class="iconbox sm">
                        <span class="icomoon icon-menu"></span>
                    </div>
                </div>
            </a>
            <a class="nav-item float-right flat" href="#">
                <div class="col-auto">
                    <div class="iconbox sm">
                        <span class="icomoon icon-notify"></span>
                    </div>
                </div>
            </a>
            <div class="nav-item float-right">
                <div class="col-auto">
                    {% include '../moleculas/usuario_tarjeta.swig' %}
                </div>
            </div>
        </div>
    </div>
</header>