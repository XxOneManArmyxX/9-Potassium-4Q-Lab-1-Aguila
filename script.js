function validateForm() {
    let name = document.forms["checkout-form"]["name"].value;
    document.forms["checkout-form"]["name"].value = name.trim();

    if (name.trim() === "") {
        alert("Enter name!");
        return false;
    }
    return true;
}