import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isFlipped = false;
  isMobile = false;
  isProjectsScreen = false;
  projects = [
    {
      title: 'MOUNTAIN',
      image:
        'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      tech: 'Angular',
      description:
        'Good tools make application development quicker and easier to maintain than if you did everything by hand.',
    },
    {
      title: 'LAKE',
      image:
        'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      tech: 'Angular',
      description:
        'Good tools make application development quicker and easier to maintain than if you did everything by hand.',
    },
    {
      title: 'OCEAN',
      image:
        'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      tech: 'Angular',
      description:
        'Good tools make application development quicker and easier to maintain than if you did everything by hand.',
    },
    {
      title: 'OCEAN',
      image:
        'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
      tech: 'Angular',
      description:
        'Good tools make application development quicker and easier to maintain than if you did everything by hand.',
    },
  ];

  goBack(): void {
    this.isProjectsScreen = false;
  }

  @ViewChild('tooltip') tooltip!: ElementRef;

  ngOnInit(): void {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      this.isMobile = true;
    } else {
      // false for not mobile device
      this.isMobile = false;
    }
  }

  showProjects() {
    this.isProjectsScreen = true;
  }

  goBackProjects() {
    this.isProjectsScreen = false;
    this.isFlipped = false;
  }

  flipCard(flip: boolean): void {
    this.isFlipped = flip;
  }

  showTooltip(): void {
    this.tooltip.nativeElement.style.opacity = '1';
  }

  hideTooltip(): void {
    this.tooltip.nativeElement.style.opacity = '0';
  }

  onMouseMove(event: MouseEvent): void {
    const tooltip = this.tooltip.nativeElement;
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
  }

  flipCardNoParam(): void {
    this.isFlipped = !this.isFlipped;
    console.log('clicked ', this.isFlipped);
  }

  flipCardTest(): void {
    this.isFlipped = this.isFlipped ? false : true;
  }
}
