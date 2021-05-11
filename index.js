$(document). ready(

    function () {

        alert("oi");
       $.ajax({
           type: "GET",
           url: "http://192.168.10.85:9000/users",                                       
             success:function(data){

                $.each(data, function(i, user){
                    console.log(user.name)
                    $('#table7').append(
                    "<tr><td>"+user.name+"</td></tr>"







                    )
             } ) 
       },error: function(data){
        console.log(data);
         
       }

    })
})