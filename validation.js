function validateEn() {
    let check = 0;
    var name = document.forms["enquiry"]["name"].value;
    let letters = /^[a-zA-Z]+$/;
    let numberz = /[^0-9]/;
    if (name == "") {
        alert("Name must not be empty");
        check = 1;
        return false;

    } else {
        if (!name.match(letters)) {
            alert("Name must be Alphabet letters only");
            check = 1;
            return false;

        }
        if (name.length < 3) {
            alert("Your name cannot be less than 3 characters long!");
            return false;
        }
    }

    /* phone number*/
    let number = document.forms["enquiry"]["number"].value;
    if (number == "") {
        alert("Number must not be empty");
        check = 1;
        return false;
    } else {
        if (number.match(numberz)) {
            alert("Your phone number is not valid, must be numbers only");
            check = 1;
            return false;
        }
        if (number.length < 10 || number.document > 10) {
            alert("Number incorrect must be 10 digits, No spaces!\nExample: 0777768018");
            return false;
        }

    }
    /*email*/
    let email = document.forms["enquiry"]["email"].value;
    if (email == "") {
        alert("Email must not be empty");
        check = 1;
        return false;
    } else {
        let email_bluep = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email_bluep.test(email)) {
            alert("You have entered an invalid email address!");
            return false;
        }

    }

    /*enquiry*/
    let enquiry = document.forms["enquiry"]["memo"].value;
    if (enquiry == "") {
        alert("Enquiry must not be empty");
        check = 1;
        return false;
    } else {
        if (enquiry.length < 20) {
            alert("That is not a valid Enquiry, Please add more words to best describe your enquiry\nMinimum of 10 words");
            return false;
        }
    }

    if (check == 0) {
        alert("Successful");

        //location.reload();
        document.name.name.value = "";

        return false;
    }


}


var form = document.forms["enquiry"];
form.onsubmit = validateEn;