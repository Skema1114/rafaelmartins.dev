import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProjectModel } from '../../../../models/ProjectModel';
import { ConfigService } from '../../../../services/config.service';

@Component({
  selector: 'projects-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent implements OnInit {
  private configService: ConfigService = inject(ConfigService);

  isProjectScrn = false;
  isFlipped = false;
  isMobile = false;
  projects!: ProjectModel[];

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

    this.projects = this.mountProjects();
  }

  goBack(): void {
    this.isProjectScrn = false;
    this.configService.setProjectScrn(false);
  }

  goBackProjects(): void {
    this.isProjectScrn = false;
    this.isFlipped = true;
    this.configService.setProjectScrn(false);
    this.configService.setFlippedCard(true);
  }

  mountProjects(): ProjectModel[] {
    return [
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
  }
}
