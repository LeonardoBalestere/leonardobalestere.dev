import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechDomain {
  name: string;
  items: string[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
})
export class TechStackComponent {
  techDomains: TechDomain[] = [
    {
      name: 'Backend & Architecture',
      items: ['C#', '.NET 10', 'REST APIs'],
    },
    {
      name: 'Frontend',
      items: ['Angular', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'Data & Cloud',
      items: ['SQL Server', 'Docker', 'Azure', 'Git'],
    },
  ];
}

