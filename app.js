//get data from wikipedia
$(function (){

$('button').click(function(){


$('.output').empty();

var keyWords = $('#keyWords').val();

var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyWords+ "&callback=?"

console.log(keyWords.length);
console.log(url);

if ($("#keyWords").val()==0) {

			alert ("Input Search Terms");

		} else {

$.ajax({
	type:"GET",
	url: url,
	dataType: "json",
	success: function(data){


		if(data[1].length==0){

			 $(".output").append("<p> Nothing to Show </p>")
		} else {


		

			for(var i=0; i<data[1].length; i++) {
		$(".output").append("<p><a target = 'blank' href="+data[3][i]+">"+ data[1][i] + ":</a></p><p>" + data[2][i] + "</p>");
	}
	}
	
		
	},
	error: function(errormessage){

	}
})
}




})


})

// zoom effect on image
$(function(){

	$('.img-zoom').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });


	$('h4').hover(function() {
        $('.img-zoom').addClass('transition');
 
    }, function() {
        $('.img-zoom').removeClass('transition');
    });
})

//make enter click search button

$(function(){

	$("#keyWords").keyup(function(event){
    if(event.keyCode == 13){
        $("button").click();
    }
});


})


