import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyExtraComponent } from './components/admin-pages/add-company-extra/add-company-extra.component';
import { AddCompanyComponent } from './components/admin-pages/add-company/add-company.component';
import { AddCustomerComponent } from './components/admin-pages/add-customer/add-customer.component';
import { AdminPwChangeComponent } from './components/admin-pages/admin-pw-change/admin-pw-change.component';
import { DailyReportsComponent } from './components/admin-pages/daily-reports/daily-reports.component';
import { RequestDetailsComponent } from './components/admin-pages/request-details/request-details.component';
import { RequestsComponent } from './components/admin-pages/requests/requests.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddBuyerExtraComponent } from './components/company-pages/add-buyer-extra/add-buyer-extra.component';
import { AddBuyerComponent } from './components/company-pages/add-buyer/add-buyer.component';
import { AddProductComponent } from './components/company-pages/add-product/add-product.component';
import { BuyersListComponent } from './components/company-pages/buyers-list/buyers-list.component';
import { BuyersComponent } from './components/company-pages/buyers/buyers.component';
import { CategoriesComponent } from './components/company-pages/categories/categories.component';
import { CompanyPwChangeComponent } from './components/company-pages/company-pw-change/company-pw-change.component';
import { ConfirmBuyerComponent } from './components/company-pages/confirm-buyer/confirm-buyer.component';
import { GoodsComponent } from './components/company-pages/goods/goods.component';
import { InfoComponent } from './components/company-pages/info/info.component';
import { ReceiptPayCatererComponent } from './components/company-pages/receipt-pay-caterer/receipt-pay-caterer.component';
import { ReceiptPayStoreComponent } from './components/company-pages/receipt-pay-store/receipt-pay-store.component';
import { ReceiptsCatererComponent } from './components/company-pages/receipts-caterer/receipts-caterer.component';
import { ReceiptsStoreComponent } from './components/company-pages/receipts-store/receipts-store.component';
import { ReportsComponent } from './components/company-pages/reports/reports.component';
import { SearchBuyerComponent } from './components/company-pages/search-buyer/search-buyer.component';
import { TableSelectionComponent } from './components/company-pages/table-selection/table-selection.component';
import { TablesComponent } from './components/company-pages/tables/tables.component';
import { CompanyComponent } from './components/company/company.component';
import { AccountComponent } from './components/customer-pages/account/account.component';
import { CompaniesProductsComponent } from './components/customer-pages/companies-products/companies-products.component';
import { CustomerPwChangeComponent } from './components/customer-pages/customer-pw-change/customer-pw-change.component';
import { CustomerComponent } from './components/customer/customer.component';
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
    path: "customer",
    component: CustomerComponent,
    children: [
      {
        path: "",
        component: CompaniesProductsComponent,
      },
      {
        path: "companies-products",
        component: CompaniesProductsComponent,
      },
      {
        path: "account",
        component: AccountComponent,
      },
      {
        path: "customer-pw-change",
        component: CustomerPwChangeComponent,
      },
    ],
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: RequestsComponent,
      },
      {
        path: "requests",
        component: RequestsComponent,
      },
      {
        path: "request-details",
        component: RequestDetailsComponent,
      },
      {
        path: "add-company",
        component: AddCompanyComponent,
      },      
      {
        path: "add-company-extra",
        component: AddCompanyExtraComponent,
      },
      {
        path: "add-customer",
        component: AddCustomerComponent,
      },
      {
        path: "daily-reports",
        component: DailyReportsComponent,
      },
      {
        path: "admin-pw-change",
        component: AdminPwChangeComponent,
      }
    ],
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
        children: [
          {
            path: "",
            component: BuyersListComponent,
          },
          {
            path: "buyers-list",
            component: BuyersListComponent,
          },
          {
            path: "add-buyer",
            component: AddBuyerComponent,
          },
          {
            path: "add-buyer-extra",
            component: AddBuyerExtraComponent,
          },
          {
            path: "search-buyer",
            component: SearchBuyerComponent,
          },
          {
            path: "confirm-buyer",
            component: ConfirmBuyerComponent,
          },
        ],
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
        path: "table-selection",
        component: TableSelectionComponent,
      },
      {
        path: "receipts-caterer",
        component: ReceiptsCatererComponent,
      },
      {
        path: "receipts-store",
        component: ReceiptsStoreComponent,
      },
      {
        path: "receipt-pay-caterer",
        component: ReceiptPayCatererComponent,
      },
      {
        path: "receipt-pay-store",
        component: ReceiptPayStoreComponent,
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
  {
    path: "add-product",
    component: AddProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
