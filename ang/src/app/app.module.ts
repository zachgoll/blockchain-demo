import { AuthGuardService } from './services/auth-guard.service';
import { PowDemoComponent } from './components/presentation-resources/pow-demo/pow-demo.component';
import { HashDemoComponent } from './components/presentation-resources/hash-demo/hash-demo.component';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateTxComponent } from './components/blockchain-demo/create-tx/create-tx.component';
import { MempoolComponent } from './components/blockchain-demo/create-tx/mempool/mempool.component';
import { BlockchainComponent } from './components/blockchain-demo/blockchain/blockchain.component';
import { CreateBlockComponent } from './components/blockchain-demo/create-block/create-block.component';
import { IncomingBlocksComponent } from './components/blockchain-demo/create-block/incoming-blocks/incoming-blocks.component';
import { UtxoSetComponent } from './components/blockchain-demo/create-tx/utxo/utxo-set/utxo-set.component';
import { NavbarSecondaryComponent } from './components/blockchain-demo/navbar-secondary/navbar-secondary.component';
import { BlockHeaderComponent } from './components/blockchain-demo/blockchain/block-header/block-header.component';
import { BlockTxsComponent } from './components/blockchain-demo/blockchain/block-txs/block-txs.component';
import { TxFormComponent } from './components/blockchain-demo/create-tx/tx-form/tx-form.component';
import { BlockFormComponent } from './components/blockchain-demo/create-block/block-form/block-form.component';
import { BlockchainDemoComponent } from './components/blockchain-demo/blockchain-demo.component';
import { HomeComponent } from './components/home/home.component';
import { CertificationComponent } from './components/certification/certification.component';
import { PresentationResourcesComponent } from './components/presentation-resources/presentation-resources.component';
import { WalletGeneratorComponent } from './components/presentation-resources/wallet-generator/wallet-generator.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent },
  { path: 'blockchain-demo', canActivate: [AuthGuardService], component: BlockchainDemoComponent, children: [
    { path: 'create-tx', canActivate: [AuthGuardService], component: CreateTxComponent },
    { path: 'create-block', canActivate: [AuthGuardService], component: CreateBlockComponent },
    { path: 'blockchain', canActivate: [AuthGuardService], component: BlockchainComponent }
  ]},
  { path: 'certification', canActivate: [AuthGuardService], component: CertificationComponent },
  { path: 'presentation-resources', canActivate: [AuthGuardService], component: PresentationResourcesComponent, children: [
    { path: 'hash-demo', canActivate: [AuthGuardService], component: HashDemoComponent },
    { path: 'pow-demo', canActivate: [AuthGuardService], component: PowDemoComponent },
    { path: 'wallet-generator', canActivate: [AuthGuardService], component: WalletGeneratorComponent }
  ]},
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    CreateTxComponent,
    MempoolComponent,
    BlockchainComponent,
    CreateBlockComponent,
    IncomingBlocksComponent,
    UtxoSetComponent,
    NavbarSecondaryComponent,
    BlockHeaderComponent,
    BlockTxsComponent,
    TxFormComponent,
    BlockFormComponent,
    BlockchainDemoComponent,
    HomeComponent,
    WalletGeneratorComponent,
    CertificationComponent,
    PresentationResourcesComponent,
    HashDemoComponent,
    PowDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
