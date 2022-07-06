import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyersComponent } from './components/company-pages/buyers/buyers.component';
import { CategoriesComponent } from './components/company-pages/categories/categories.component';
import { CompanyPwChangeComponent } from './components/company-pages/company-pw-change/company-pw-change.component';
import { GoodsComponent } from './components/company-pages/goods/goods.component';
import { InfoComponent } from './components/company-pages/info/info.component';
import { ReceiptsComponent } from './components/company-pages/receipts/receipts.component';
import { ReportsComponent } from './components/company-pages/reports/reports.component';
import { TablesComponent } from './components/company-pages/tables/tables.component';
import { CompanyComponent } from './components/company/company.component';
import { FirstLoginComponent } from './components/first-login/first-login.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login-admin",
    component: LoginAdminComponent,
  },
  {
    path: "first-login",
    component: FirstLoginComponent,
  },
  {
    path: "company",
    component: CompanyComponent,
    children: [
      {
        path: "",
        component: InfoComponent,
      },
      {
        path: "info",
        component: InfoComponent,
      },
      {
        path: "buyers",
        component: BuyersComponent,
      },
      {
        path: "goods",
        component: GoodsComponent,
      },
      {
        path: "categories",
        component: CategoriesComponent,
      },
      {
        path: "tables",
        component: TablesComponent,
      },
      {
        path: "receipts",
        component: ReceiptsComponent,
      },
      {
        path: "reports",
        component: ReportsComponent,
      },
      {
        path: "company-pw-change",
        component: CompanyPwChangeComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
