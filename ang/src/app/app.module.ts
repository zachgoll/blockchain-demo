import { CanDeactivateGuard } from './services/can-deactivate-service';
import { AuthGuardService } from './services/auth-guard.service';
import { PowDemoComponent } from './components/presentation-resources/pow-demo/pow-demo.component';
import { HashDemoComponent } from './components/presentation-resources/hash-demo/hash-demo.component';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileSelectDirective } from 'ng2-file-upload';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselModule } from 'primeng/carousel';
import {DragDropModule} from 'primeng/dragdrop';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

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
import { BlockHeaderComponent } from './components/blockchain-demo/blockchain/block-header/block-header.component';
import { BlockTxsComponent } from './components/blockchain-demo/blockchain/block-txs/block-txs.component';
import { BlockFormComponent } from './components/blockchain-demo/create-block/block-form/block-form.component';
import { BlockchainDemoComponent } from './components/blockchain-demo/blockchain-demo.component';
import { HomeComponent } from './components/home/home.component';
import { CertificationComponent } from './components/certification/certification.component';
import { PresentationResourcesComponent } from './components/presentation-resources/presentation-resources.component';
import { WalletGeneratorComponent } from './components/presentation-resources/wallet-generator/wallet-generator.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { QueryService } from './services/query.service';
import { GlossaryComponent } from './components/glossary/glossary.component';
import { FaqComponent } from './components/faq/faq.component';
import { GlossaryService } from './services/glossary.service';

/**
 * All child routes protected if canActivate present on parent
 * To allow the parent but not the children, use canActivateChild: [AuthGuardService] instead
 */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent },
  { path: 'blockchain-demo', canActivate: [AuthGuardService], component: BlockchainDemoComponent, children: [
    { path: 'create-tx', component: CreateTxComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'create-block', component: CreateBlockComponent },
    { path: 'blockchain', component: BlockchainComponent }
  ]},
  { path: 'certification', canActivate: [AuthGuardService], component: CertificationComponent },
  { path: 'glossary', canActivate: [AuthGuardService], component: GlossaryComponent },
  { path: 'faq', canActivate: [AuthGuardService], component: FaqComponent },
  { path: 'presentation-resources', canActivate: [AuthGuardService], component: PresentationResourcesComponent, children: [
    { path: 'hash-demo', component: HashDemoComponent },
    { path: 'pow-demo', component: PowDemoComponent },
    { path: 'wallet-generator', component: WalletGeneratorComponent }
  ]},
  { path: 'error-page', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  { path: '**', redirectTo: '/error-page'}
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
    BlockHeaderComponent,
    BlockTxsComponent,
    BlockFormComponent,
    BlockchainDemoComponent,
    HomeComponent,
    WalletGeneratorComponent,
    CertificationComponent,
    PresentationResourcesComponent,
    HashDemoComponent,
    PowDemoComponent,
    ErrorPageComponent,
    FileSelectDirective,
    GlossaryComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    NgbModule.forRoot(),
    Ng2CarouselamosModule,
    CarouselModule,
    DragDropModule,
    Ng2PageScrollModule
  ],
  providers: [AuthService, AuthGuardService, CanDeactivateGuard, QueryService, GlossaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
