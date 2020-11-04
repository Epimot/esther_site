

/*client height and width*/
var clientHeight = window.innerHeight;
var clientWidth = window.innerWidth;

/*calculating the parent folder url*/
function detectParentUrl(){
	var chaine = document.URL;
	var index = (chaine.lastIndexOf("/"));
	var newUrl = "";
	for (let i = 0; i < index+1; i++) {
		newUrl += chaine[i];
	};
	return newUrl;
};
/*calculating the current file name*/
function detectCurrentFile(){
	var chaine = document.URL;
	console.log(chaine);
	var dollar = (chaine.lastIndexOf("#"));
	console.log(dollar);
	var index = (chaine.lastIndexOf("/"));
	var file = "";
	if(dollar===-1){
		for (let i=index+1; i<chaine.length; i++) {
			file += (chaine[i]);
		}
	} else {
		for (let i=index+1; i<dollar; i++) {
			file += (chaine[i]);
		}
	}
	console.log(file);
	return file;
};

/*attributing new url on click for the image menu on main page ("mehr" btns)*/
$("#option1_btn").click(function(){
	window.location.href = detectParentUrl() + "uber-mich.php";
});
$("#option2_1_btn").click(function(){
	window.location.href = detectParentUrl() + "angebote-einzelne.php";
});
$("#option2_2_btn").click(function(){
	window.location.href = detectParentUrl() + "angebote-paare.php";
});
$("#option2_3_btn").click(function(){
	window.location.href = detectParentUrl() + "angebote-familien.php";
});
$("#option3_btn").click(function(){
	window.location.href = detectParentUrl() + "arbeitsweise.php";
});
$("#option4_btn").click(function(){
	window.location.href = detectParentUrl() + "konditionen.php";
});
$("#option5_btn").click(function(){
	window.location.href = detectParentUrl() + "kontakt.php";
});
/*click on main title = back to main page*/
$("#main_title").click(function(){
	window.location.href = detectParentUrl() + "index.php";
});
/*flag click to redirect on the same page in another language*/
$("#de_flag").click(function(){
	var parentFolder = detectParentUrl();
	/*main folder url*/
	var mainFolderUrl = "";
	for (i=0; i<parentFolder.length-3; i++){
		mainFolderUrl += parentFolder[i];
	};
	if((parentFolder[parentFolder.length -3]+parentFolder[parentFolder.length -2]) === "fr"){
		if(detectCurrentFile()==="kontakt.php"){
			window.location.href = mainFolderUrl + "de/kontakt.php";
		}
		else if(detectCurrentFile()==="index.php"){
			window.location.href = mainFolderUrl + "de/index.php";
		}
		else if(detectCurrentFile()==="uber-mich.php"){
			window.location.href = mainFolderUrl + "de/uber-mich.php";
		}
		else if(detectCurrentFile()==="konditionen.php"){
			window.location.href = mainFolderUrl + "de/konditionen.php";
		}
		else if(detectCurrentFile()==="arbeitsweise.php"){
			window.location.href = mainFolderUrl + "de/arbeitsweise.php";
		}
		else if(detectCurrentFile()==="angebote-einzelne.php"){
			window.location.href = mainFolderUrl + "de/angebote-einzelne.php";
		}
		else if(detectCurrentFile()==="angebote-paare.php"){
			window.location.href = mainFolderUrl + "de/angebote-paare.php";
		}
		else if(detectCurrentFile()==="angebote-familien.php"){
			window.location.href = mainFolderUrl + "de/angebote-familien.php";
		}
	}
});

$("#fr_flag").click(function(){
	var parentFolder = detectParentUrl();
	/*main folder url*/
	var mainFolderUrl = "";
	for (i=0; i<parentFolder.length-3; i++){
		mainFolderUrl += parentFolder[i];
	};
	if((parentFolder[parentFolder.length -3]+parentFolder[parentFolder.length -2]) === "de"){
		if(detectCurrentFile()==="kontakt.php"){
			window.location.href = mainFolderUrl + "fr/kontakt.php";
		}
		else if(detectCurrentFile()==="index.php"){
			window.location.href = mainFolderUrl + "fr/index.php";
		}
		else if(detectCurrentFile()==="uber-mich.php"){
			window.location.href = mainFolderUrl + "fr/uber-mich.php";
		}
		else if(detectCurrentFile()==="konditionen.php"){
			window.location.href = mainFolderUrl + "fr/konditionen.php";
		}
		else if(detectCurrentFile()==="arbeitsweise.php"){
			window.location.href = mainFolderUrl + "fr/arbeitsweise.php";
		}
		else if(detectCurrentFile()==="angebote-einzelne.php"){
			window.location.href = mainFolderUrl + "fr/angebote-einzelne.php";
		}
		else if(detectCurrentFile()==="angebote-paare.php"){
			window.location.href = mainFolderUrl + "fr/angebote-paare.php";
		}
		else if(detectCurrentFile()==="angebote-familien.php"){
			window.location.href = mainFolderUrl + "fr/angebote-familien.php";
		}
	}
});

$("#sub_menu").css("min-width",parseInt($("#main_nav_el_2").width()-15)+"px");
$("#sub_menu_de").css("min-width","120px");

/*datenschutzerklärung visibility on click*/

$(".datenschutzerklärung").click(function(){
	let datHeight = clientHeight-300;
	let datWidth = clientWidth-300;
	$("#datenschutzerklärung").css({"display":"block",
		"height":datHeight+"px",
		"width":datWidth+"px",
	});
	$("#body").css("overflow","hidden");
});
$(".impressum").click(function(){
	let datHeight = clientHeight-300;
	let datWidth = clientWidth-300;
	$("#impressum").css({"display":"block",
		"height":datHeight+"px",
		"width":datWidth+"px",
	});
	$("#body").css("overflow","hidden");
});

/*datenschutzerklärung exit*/
$(".exit").click(function(){
	$("#datenschutzerklärung").css("display","none");
	$("#body").css("overflow","scroll");
});
$(".exit").click(function(){
	$("#impressum").css("display","none");
	$("#body").css("overflow","scroll");
});

/*show menu on mobiles*/
if (window.matchMedia("(max-width: 900px)").matches || (window.matchMedia("(orientation: landscape)").matches && window.matchMedia("(max-height: 700px)").matches)){
	console.log("width<900px");
	$("#hidden_mobile_bar").click(function(){
		$("#menu_ul_de").toggle();
		$("#menu_ul_fr").toggle();
	});
	$("#main_nav_el_2").click(function(){
		if($('#sub_menu_de,#sub_menu').css('display') == 'none'){
			$("#sub_menu_de,#sub_menu").show();
			$("#sub_menu_de,#sub_menu").css("right",clientWidth-($("#main_nav_el_2").offset().left));
			$("#sub_menu_de,#sub_menu").css("top",$("#main_nav_el_2").position().top);
			$("#sub_menu_de,#sub_menu").css("padding","0% 0%");
			$("#sub_menu_de,#sub_menu").css("list-style","none");
			$("#main_nav_el_1,#main_nav_el_3,#main_nav_el_4,#main_nav_el_5").css("visibility","hidden"); 
		}
		else{
			$("#sub_menu_de,#sub_menu").hide();
			$("#main_nav_el_1,#main_nav_el_3,#main_nav_el_4,#main_nav_el_5").css("visibility","visible"); 
		};
	})
};
