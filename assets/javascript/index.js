$(document).ready(function () {
    M.AutoInit(); //this should auto intiate everything needed but rest of code is in place just in case
    M.updateTextFields();
    
    //tooltips
    $('.tooltipped').tooltip();

    // SIDE NAV FUNCTIONS
    $('.tabs').tabs();
    $('.sidenav').sidenav();

  
    //modal
    $('.modal').modal();
  
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem, {
      onOpenStart: function () {
      },
      onCloseEnd: function () {
        $('.tabs').tabs();
      }
    });
  
  
    $('select').formSelect();
  
    // Unused click handler
    // $('.linkedInBtn').click(function () {
    // });
  

  });
  