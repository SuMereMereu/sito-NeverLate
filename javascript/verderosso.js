$(document).ready(function()
{
  $('#inputEmailRepeated').keyup(function()
  {
    mail = $('#inputEmail').val();
    rep_email = $('#inputEmailRepeated').val();
    					
    $('#EmailID').removeClass();
    					
    if(rep_email == "")
    {
      $('#EmailID').addClass("form-group");
    }
    					
    else
    {
      if(mail == rep_email)
      {
        $('#EmailID').addClass("form-group has-success");
      }
      else
      {
        $('#EmailID').addClass("form-group has-error");
      }
    }
  })
    				
  $('#inputPasswordRepeated').keyup(function()
  {
    psw = $('#inputPassword').val();
    rep_psw = $('#inputPasswordRepeated').val();
    					
    $('#PasswordID').removeClass();
    					
    if(rep_psw == "")
    {
      $('#PasswordID').addClass("form-group");
    }
    					
    else
    {
      if(psw == rep_psw)
      {
        $('#PasswordID').addClass("form-group has-success");
      }
      else
      {
        $('#PasswordID').addClass("form-group has-error");
      }
    }
  })
})
