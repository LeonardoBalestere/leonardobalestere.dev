import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  details: string[];
  tags: string[];
  githubUrl?: string;
  status: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Inventory Management System',
      description: 'Sistema completo de gerenciamento de estoque com arquitetura limpa, focado em escalabilidade e manutenibilidade. Desenvolvido com as melhores práticas de engenharia de software.',
      details: [
        'API RESTful com .NET 10 e Clean Architecture (Domain, Application, Infrastructure, Presentation)',
        'Entity Framework Core com SQL Server e migrações automatizadas',
        'Autenticação JWT com controle de acesso baseado em roles',
        'Containerização com Docker e Docker Compose para todos os serviços',
        'Pipeline CI/CD com GitHub Actions: build, testes, análise estática e deploy automatizado',
        'Testes unitários e de integração com xUnit e Testcontainers',
      ],
      tags: ['.NET 10', 'Clean Architecture', 'Entity Framework', 'Docker', 'CI/CD'],
      githubUrl: 'https://github.com/LeonardoBalestere',
      status: 'Em Desenvolvimento',
    },
  ];
}
