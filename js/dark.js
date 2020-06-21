	function myFunction(){
		var element = document.body;
		element.classList.toggle("dark");
	}
	function thank(){
		var element = document.getElementById("myid");
		element.classList.toggle("thanks");
	}
	function searchide(){
		var x = document.getElementById("sear");
		if (x.style.display === "none") {
			x.style.display= "block";
		}
		else{
			x.style.display="none"
		}
	}