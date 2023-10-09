document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("imgModal");
    var img = document.getElementById("picture");
    var modalImg = document.getElementById("zoom");
    
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";