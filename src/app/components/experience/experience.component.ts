import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Automação de Processos & Infraestrutura',
      type: 'Freelance',
      period: '2023 – Presente',
      description: 'Desenvolvimento e implantação de soluções de automação inteligentes para pequenas e médias empresas, com foco em redução de trabalho manual e integração de sistemas legados.',
      highlights: [
        'Provisionamento e configuração de servidores VPS (Ubuntu/Debian) com Nginx, SSL/TLS e hardening de segurança',
        'Desenvolvimento de workflows n8n para automação de processos de negócio, integração entre SaaS e notificações em tempo real',
        'Integração de modelos de IA (OpenAI API, Whisper) em pipelines de automação para processamento de linguagem natural e análise de dados',
        'Implementação de soluções de backup automatizado e monitoramento de uptime',
        'Configuração de ambientes Docker em produção com estratégias de zero-downtime deploy',
      ],
      tags: ['VPS', 'Linux', 'n8n', 'Docker', 'OpenAI API', 'Nginx', 'Automação'],
    },
  ];
}
