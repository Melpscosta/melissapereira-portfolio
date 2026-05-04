// src/data/ProjetoDetalhado.ts
export type ProjetoInfo = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  cover?: string;   
  hero?: string;    
  galeria?: string[]; 
  imagem?: string;   
  mottuCover?: string; // 👈 adicionado só para a Mottu
};

export const projetosDetalhados: Record<string, ProjetoInfo> = {
  mottu: {
    titulo: "Challenge Mottu",
    descricao:
      "Sistema inteligente para mapeamento de pátios com QR Codes, BLE e IoT embarcado, otimizando localização de motos.",
    tecnologias: ["React", "Node.js", "BLE", "ESP32", "RSSI", "MQTT", "PostgreSQL"],
    mottuCover: "/assets/mottuCover.jpg", // 👈 nova capa principal
    hero: "/assets/mottu-hero.jpg",
    galeria: ["/assets/mottu-1.jpg", "/assets/mottu-2.jpg", "/assets/mottu-3.jpg"],
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
    titulo: "HealthCare",
    descricao:
      "App de marcação de consultas médicas e troca de mensagens para facilitar o dia a dia de médicos e pacientes.",
    tecnologias: ["PL/SQL", "Typescript", "React", "React Native", "UX/UI"],
    cover: "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (2).jpeg",
    hero: "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (2).jpeg",
    galeria: [
      "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (2).jpeg",
      "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (3).jpeg",
      "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (4).jpeg",
    ],
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
