import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { FirstLoginComponent } from './components/first-login/first-login.component';
import { CompanyComponent } from './components/company/company.component';
import { InfoComponent } from './components/company-pages/info/info.component';
import { BuyersComponent } from './components/company-pages/buyers/buyers.component';
import { GoodsComponent } from './components/company-pages/goods/goods.component';
import { CategoriesComponent } from './components/company-pages/categories/categories.component';
import { TablesComponent } from './components/company-pages/tables/tables.component';
import { ReportsComponent } from './components/company-pages/reports/reports.component';
import { CompanyPwChangeComponent } from './components/company-pages/company-pw-change/company-pw-change.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddCustomerComponent } from './components/admin-pages/add-customer/add-customer.component';
import { AddCompanyComponent } from './components/admin-pages/add-company/add-company.component';
import { RequestsComponent } from './components/admin-pages/requests/requests.component';
import { DailyReportsComponent } from './components/admin-pages/daily-reports/daily-reports.component';
import { AdminPwChangeComponent } from './components/admin-pages/admin-pw-change/admin-pw-change.component';
import { AddCompanyExtraComponent } from './components/admin-pages/add-company-extra/add-company-extra.component';
import { RequestDetailsComponent } from './components/admin-pages/request-details/request-details.component';
import { CompaniesProductsComponent } from './components/customer-pages/companies-products/companies-products.component';
import { AccountComponent } from './components/customer-pages/account/account.component';
import { AccountDetailsComponent } from './components/customer-pages/account-details/account-details.component';
import { CustomerPwChangeComponent } from './components/customer-pages/customer-pw-change/customer-pw-change.component';
import { AddProductComponent } from './components/company-pages/add-product/add-product.component';
import { AddBuyerComponent } from './components/company-pages/add-buyer/add-buyer.component';
import { SearchBuyerComponent } from './components/company-pages/search-buyer/search-buyer.component';
import { BuyersListComponent } from './components/company-pages/buyers-list/buyers-list.component';
import { AddBuyerExtraComponent } from './components/company-pages/add-buyer-extra/add-buyer-extra.component';
import { ConfirmBuyerComponent } from './components/company-pages/confirm-buyer/confirm-buyer.component';
import { ReceiptsCatererComponent } from './components/company-pages/receipts-caterer/receipts-caterer.component';
import { ReceiptsStoreComponent } from './components/company-pages/receipts-store/receipts-store.component';
import { ReceiptPayStoreComponent } from './components/company-pages/receipt-pay-store/receipt-pay-store.component';
import { ReceiptPayCatererComponent } from './components/company-pages/receipt-pay-caterer/receipt-pay-caterer.component';
import { TableSelectionComponent } from './components/company-pages/table-selection/table-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginAdminComponent,
    FirstLoginComponent,
    CompanyComponent,
    InfoComponent,
    BuyersComponent,
    GoodsComponent,
    CategoriesComponent,
    TablesComponent,
    ReportsComponent,
    CompanyPwChangeComponent,
    CustomerComponent,
    AdminComponent,
    AddCustomerComponent,
    AddCompanyComponent,
    RequestsComponent,
    DailyReportsComponent,
    AdminPwChangeComponent,
    AddCompanyExtraComponent,
    RequestDetailsComponent,
    CompaniesProductsComponent,
    AccountComponent,
    AccountDetailsComponent,
    CustomerPwChangeComponent,
    AddProductComponent,
    AddBuyerComponent,
    SearchBuyerComponent,
    BuyersListComponent,
    AddBuyerExtraComponent,
    ConfirmBuyerComponent,
    ReceiptsCatererComponent,
    ReceiptsStoreComponent,
    ReceiptPayStoreComponent,
    ReceiptPayCatererComponent,
    TableSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
