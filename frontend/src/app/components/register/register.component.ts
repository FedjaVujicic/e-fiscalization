import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Receipt } from 'src/app/models/receipt';
import { CompanyService } from 'src/app/services/company/company.service';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

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
  logo: string;
  imageFits: boolean;
  allReceipts: Array<Receipt> = [];
  filteredReceipts: Array<Receipt> = [];

  message: string;

  constructor(private companyService: CompanyService, private router: Router, private receiptService: ReceiptService) { }

  ngOnInit(): void {
    this.receiptService.getAllReceipts().subscribe((allReceipts: Array<Receipt>) => {
      this.allReceipts = allReceipts;
      this.allReceipts.sort((a, b) => {
        let aDate, bDate: Date;
        aDate = new Date(a.date);
        bDate = new Date(b.date);
        return bDate.getTime() - aDate.getTime();
      });
      this.filteredReceipts = this.allReceipts.slice(0, 5);
    });
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
    else if (!this.phoneOk()) {
      this.message = "Neispravan telefon";
    }
    else if (!this.imageFits) {
      this.message = "Slika mora biti veličine min 100x100, max 300x300";
    }
    else {
      this.companyService.exists(this.username, this.email).subscribe((company: Company) => {
        if (company != null) {
          if (company.username == this.username) {
            this.message = "Korisnicko ime je zauzeto";
          }
          else if (company.email == this.email) {
            this.message = "Email adresa je zauzeta";
          }
        }        
        else {
          this.message = null;
          this.sendRegisterRequest();
        }
      });
      
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

  phoneOk(): boolean {
    const mbFormat = /^[0-9]+$/;
    return mbFormat.test(this.phone);
  }

  // Receives input image file, checks the size, and stores the image path
  onFileChanged(fileInput: any) {
    const image = new Image();

    image.src = URL.createObjectURL(fileInput.target.files[0]);

    image.onload = (e: any) => {
      const height = e.path[0].height;
      const width = e.path[0].width;

      if (width > 300 || height > 300 || width < 100 || height < 100) {
        this.imageFits = false;
      }
      else {
        this.imageFits = true;
        this.logo = "./assets/logo/" + fileInput.target.files[0].name;
      }
    }
  }

  // Creates a database entry for the company
  sendRegisterRequest(): void {
    this.companyService.register(this.repName, this.username, this.password, this.phone, this.email,
      this.name, this.address, this.pib, this.mb, this.logo).subscribe(resp => {
        if (resp["message"] == "ok") {
          alert("uspešno!");
        } else {
          alert("neuspešno!");
        }
        sessionStorage.clear();
        this.router.navigate([""]);
      });
  }

}
