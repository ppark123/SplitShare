function remove1() {
    let div = document.getElementsByClassName("pendingDonation1");
    div.style.display = "none";
}

function remove2(divName) {

    document.getElementsByClassName("divName").style.display = "none";
}

function remove3(divName) {

    document.getElementsByClassName("divName").style.display = "none";
}

function remove1_completed(divName) {
    incrementDonated()
    document.getElementsByClassName("divName").style.display = "none";


}

function remove2_completed(divName) {
    incrementDonated()
    document.getElementsByClassName("divName").style.display = "none";
    
}

function remove3_completed(divName) {
    incrementDonated()
    document.getElementsByClassName("divName").style.display = "none";

}