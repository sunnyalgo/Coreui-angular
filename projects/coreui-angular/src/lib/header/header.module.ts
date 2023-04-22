import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { HeaderDividerComponent } from './header-divider/header-divider.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { HeaderTogglerDirective } from './header-toggler/header-toggler.directive';

@NgModule({
  imports: [
    HeaderComponent,
    HeaderBrandComponent,
    HeaderDividerComponent,
    HeaderNavComponent,
    HeaderTextComponent,
    HeaderTogglerDirective
  ],
  exports: [
    HeaderComponent,
    HeaderBrandComponent,
    HeaderDividerComponent,
    HeaderNavComponent,
    HeaderTextComponent,
    HeaderTogglerDirective
  ]
})
export class HeaderModule {}
