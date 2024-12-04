import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessCardComponent } from './pages/src/lib/business-card/business-card.component';
import { ProjectsListComponent } from './pages/src/lib/projects-list/projects-list.component';
import { ConfigService } from './services/config.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    BusinessCardComponent,
    ProjectsListComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private configService: ConfigService = Inject(ConfigService);

  isMobile = false;

  ngOnInit(): void {
    const mobileValue = this.checkDispositive();
    this.isMobile = mobileValue;
    this.configService.setMobile(mobileValue);
  }

  checkDispositive(): boolean {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
