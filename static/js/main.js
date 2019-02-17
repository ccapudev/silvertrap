var sidebar_trigger = document.getElementById('openSideBar');

function showSideBar(){
    var bodyClasses = document.body.classList;
    if (bodyClasses.contains('sidebar-open')) {
        bodyClasses.remove('sidebar-open');
        return;
    }
    bodyClasses.add('sidebar-open')
}