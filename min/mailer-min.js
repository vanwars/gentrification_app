$(function(){console.log("sending form...");var a=$("#ajax-contact"),e=$("#form-messages");$(a).submit(function(t){t.preventDefault();var n=$(a).serialize();$.ajax({type:"POST",url:$(a).attr("action"),data:n}).done(function(a){$(e).text(a),$("#name").val(""),$("#last_name").val(""),$("#email").val(""),$("#story").val(""),$("#location").val(""),$("#image_url").val("")}).fail(function(a){$(e).text(""!==a.responseText?a.responseText:"Oops! An error occured and your message could not be sent.")})})});