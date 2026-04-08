import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  level?: string;
}

interface TechCategory {
  name: string;
  icon: string;
  items: TechItem[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
})
export class TechStackComponent {
  categories: TechCategory[] = [
    {
      name: 'Backend',
      icon: '⚙️',
      items: [
        { name: 'C#', level: 'Avançado' },
        { name: '.NET 10', level: 'Avançado' },
        { name: 'ASP.NET Core', level: 'Avançado' },
        { name: 'SQL Server', level: 'Intermediário' },
        { name: 'Entity Framework', level: 'Intermediário' },
        { name: 'Clean Architecture', level: 'Avançado' },
        { name: 'REST APIs', level: 'Avançado' },
        { name: 'xUnit', level: 'Intermediário' },
      ],
    },
    {
      name: 'Frontend',
      icon: '🎨',
      items: [
        { name: 'Angular', level: 'Intermediário' },
        { name: 'TypeScript', level: 'Intermediário' },
        { name: 'Tailwind CSS', level: 'Intermediário' },
        { name: 'HTML5 / CSS3', level: 'Avançado' },
        { name: 'RxJS', level: 'Básico' },
      ],
    },
    {
      name: 'DevOps & Infraestrutura',
      icon: '🚀',
      items: [
        { name: 'GitHub Actions', level: 'Intermediário' },
        { name: 'Docker', level: 'Intermediário' },
        { name: 'Linux / VPS', level: 'Intermediário' },
        { name: 'Nginx', level: 'Básico' },
        { name: 'n8n', level: 'Intermediário' },
        { name: 'Git', level: 'Avançado' },
      ],
    },
  ];
}
