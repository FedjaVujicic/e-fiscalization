import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  repName: string;
  username: string;
  password: string;
  passwordSecond: string;
  phone: string;
  email: string;
  name: string;
  address: string;
  pib: string;
  mb: string;

  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  // Performs basic form checks and sends a request for registration
  register(): void {
    if (!this.repName || !this.username || !this.password || !this.passwordSecond
      || !this.phone || !this.email || !this.name || !this.address
      || !this.pib || !this.mb) {
      this.message = "Polja ne smeju biti prazna";
    }
    else if (this.userExists()) {
      this.message = "Korisničko ime je zauzeto"
    }
    else if (!this.passwordOk()) {
    }
    else if (this.emailExists()) {
      this.message = "Korisničko ime je zauzeto"
    }
    else if (!this.pibOk()) {
      this.message = "Neispravan pib";
    }
    else if (!this.mbOk()) {
      this.message = "Neispravan mb";
    }
    else {
      this.message = null;
      this.sendRequest();
    }
  }

  // Checks the password format and whether the passwords match aaaaaA1!
  passwordOk(): boolean {
    if (this.password != this.passwordSecond) {
      this.message = "Lozinke nisu iste";
      return false;
    }
    else {
      const pwFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
      if (!pwFormat.test(this.password)) {
        this.message = "Lozinka mora imati \n -Minimalno 8 karaktera \n -Maksimalno 12 karaktera \n -Bar jedno veliko slovo \n -Bar jedan broj \n -Bar jedan specijalni karakter \n -Počinjati slovom";
        return false;
      }
      else {
        return true;
      }
    }
  }

  userExists(): boolean {
    return false;
  }

  emailExists(): boolean {
    return false;
  }

  pibOk(): boolean {
    const pibFormat = /^[1-9][0-9]{8}$/;
    return pibFormat.test(this.pib);
  }

  mbOk(): boolean {    
    const mbFormat = /^[0-9]{8}$/;
    return mbFormat.test(this.mb);
  }

  // Creates a database entry for the company
  sendRequest(): void {

  }

}
