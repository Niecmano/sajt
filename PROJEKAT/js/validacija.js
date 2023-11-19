function validateForm() {
    var ime = document.getElementById('ime').value;
    var email = document.getElementById('email').value;
    var automobil = document.getElementById('automobil').value;
    var komentar = document.getElementById('komentar').value;

    if (ime == "" || email == "") {
        alert("Morate popuniti sva obavezna polja!");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Neispravan format email-a!");
        return false;
    }

    // Provera imena
    if (!/^[A-Z][a-z]{2,34}$/.test(ime)) {
        alert("Ime mora počinjati velikim slovom, imati najmanje 3 a najviše 35 karaktera!");
        return false;
    }

    var poruka = "Prikupljeni podaci:\n";
    poruka += "Ime: " + ime + "\n";
    poruka += "Email: " + email + "\n";
    poruka += "Automobil: " + automobil + "\n";
    poruka += "Komentar: " + komentar;

    alert(poruka);
    return true; 
}