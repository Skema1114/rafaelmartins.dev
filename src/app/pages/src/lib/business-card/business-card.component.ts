import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'business-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.scss',
})
export class BusinessCardComponent {
  private configService: ConfigService = inject(ConfigService);

  isFlipped = false;
  isMobile = false;
  isProjectScrn = false;
  @ViewChild('tooltip') tooltip!: ElementRef;

  ngOnInit() {
    this.configService.isFlipped$?.subscribe((value: boolean) => {
      this.isFlipped = value;
    });

    this.configService.isProjectScrn$?.subscribe((value: boolean) => {
      this.isProjectScrn = value;
    });

    this.configService.isMobile$?.subscribe((value: boolean) => {
      this.isMobile = value;
    });
  }

  showProjects(): void {
    this.isProjectScrn = true;
    this.configService.setProjectScrn(true);
  }

  flipCard(flip: boolean): void {
    this.isFlipped = flip;
    this.configService.setFlippedCard(flip);
  }

  showTooltip(): void {
    this.tooltip.nativeElement.style.opacity = '1';
  }

  hideTooltip(): void {
    this.tooltip.nativeElement.style.opacity = '0';
  }

  onMouseMove(event: MouseEvent): void {
    this.tooltip.nativeElement.style.left = `${event.pageX + 10}px`;
    this.tooltip.nativeElement.style.top = `${event.pageY + 10}px`;
  }
}
