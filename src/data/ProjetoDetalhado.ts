// src/data/ProjetoDetalhado.ts
export type ProjetoInfo = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  cover?: string;   
  hero?: string;    
  galeria?: string[]; 
  imagem?: string;   
};

export const projetosDetalhados: Record<string, ProjetoInfo> = {
  mottu: {
    titulo: "Challenge Mottu",
    descricao:
      "Sistema inteligente para mapeamento de pátios com QR Codes, BLE e IoT embarcado, otimizando localização de motos.",
    tecnologias: ["React", "Node.js", "BLE", "ESP32", "RSSI", "MQTT", "PostgreSQL"],
    cover: "/assets/mottu.jpg", // se preferir, mantenha só imagem e remova cover
    hero: "/assets/mottu-hero.jpg",
    galeria: ["/assets/mottu-1.jpg", "/assets/mottu-2.jpg", "/assets/mottu-3.jpg"],
  },
  "conexao-solidaria": {
    titulo: "Conexão Solidária",
    descricao:
      "App offline via Bluetooth Mesh para comunicação em áreas sem internet durante emergências e desastres naturais.",
    tecnologias: ["React Native", "SQLite", "Spring Boot", "BLE"],
    cover: "/assets/conexao.png",
    hero: "/assets/conexao-hero.jpg",
    galeria: ["/assets/conexao-1.jpg"],
  },
  "agua-viva": {
    titulo: "Água Viva",
    descricao:
      "App de voluntariado ecológico que recompensa ações ambientais com experiências em viagens sustentáveis.",
    tecnologias: ["React.js", "Node.js", "PostgreSQL", "Mapbox"],
    cover: "/assets/aguaviva.jpg",
    hero: "/assets/aguaviva-hero.jpg",
    galeria: ["/assets/aguaviva-1.jpg", "/assets/aguaviva-2.jpg", "/assets/aguaviva-3.jpg"],
  },
  "marcacao-de-consultas-medicas": {
    titulo: "Marcação de Consultas Médicas",
    descricao:
      "Sistema para agendamento online de consultas populares, com foco em usabilidade e acessibilidade ampla.",
    tecnologias: ["PL/SQL", "Typescript", "React", "React Native", "UX/UI"],
    cover: "/assets/marcacao.png",
    hero: "/assets/marcacao-hero.jpg",
    galeria: ["/assets/marcacao-1.jpg", "/assets/marcacao-2.jpg"],
  },
  "porto-seguro": {
    titulo: "Porto Seguro",
    descricao:
      "Plataforma para diagnóstico inteligente de veículos, prontuário automotivo e capacitação de mecânicos.",
    tecnologias: ["API REST", "UX/UI", "Node.js", "React", "Spring Boot", "MySQL"],
    cover: "/assets/porto.jpg",
    hero: "/assets/porto-hero.jpg",
    galeria: ["/assets/porto-1.jpg", "/assets/porto-2.jpg"],
  },
};
