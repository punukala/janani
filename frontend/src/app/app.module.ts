import { ChartsModule } from 'ng2-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersService } from './customers/customers.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { OrdersComponent } from './orders/orders.component';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CattlesComponent } from './cattles/cattles.component';
import { IonicModule } from '@ionic/angular';
import { FodderInventoryComponent } from './fodder-inventory/fodder-inventory.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CattleDialogComponent } from './cattles/cattle-dialog/cattle-dialog.component';
import {  ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CustomerDialogComponent } from './customers/customer-dialog/customer-dialog.component';
import { OrderDialogComponent } from './orders/order-dialog/order-dialog.component';
import { FodderInventoryDialogComponent } from './fodder-inventory/fodder-inventory-dialog/fodder-inventory-dialog.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { JdfDashboardComponent } from './jdf-dashboard/jdf-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './charts/store-sessions-chart/store-sessions-chart.component';
import { MiniCardComponent } from './mini-card/mini-card.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    LoginComponent,
    MessageComponent,
    OrdersComponent,
    CattlesComponent,
    FodderInventoryComponent,
    CattleDialogComponent,
    ConfirmDialogComponent,
    CustomerDialogComponent,
    OrderDialogComponent,
    FodderInventoryDialogComponent,
    NavComponent,
    JdfDashboardComponent,
    CardComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    MiniCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatMomentDateModule, MatIconModule, MatListModule,
    MatSidenavModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatTooltipModule,
    FlexLayoutModule,
    IonicModule.forRoot(),
    LayoutModule,
    MatGridListModule,
    MatMenuModule,
    ChartsModule
  ],
  entryComponents:[CattleDialogComponent, ConfirmDialogComponent,],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
