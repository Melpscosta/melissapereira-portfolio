export const projetosDetalhados: Record<string, {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem?: string;
}> = {
  "mottu": {
    titulo: "Challenge Mottu",
    descricao: "Sistema inteligente para mapeamento de pátios com QR Codes, BLE e IoT embarcado, otimizando localização de motos.",
    tecnologias: ["React", "React Native", "Tailwind", "Supabase", "ESP32", "Node.js"],
    imagem: "/assets/mottu.jpg"
  },
  "conexao-solidaria": {
    titulo: "Conexão Solidária",
    descricao: "App offline via Bluetooth Mesh para comunicação em áreas sem internet durante emergências e desastres naturais.",
    tecnologias: ["React Native", "Java Spring Boot", "Docker", "BLE", "PostgreSQL"],
    imagem: "/assets/conexao.png"
  },
  "agua-viva": {
    titulo: "Água Viva",
    descricao: "App de voluntariado ecológico que recompensa ações ambientais com experiências em viagens sustentáveis.",
    tecnologias: ["Flutter", "Firebase", "Gamificação", "Mapbox"],
    imagem: "/assets/aguaviva.jpg"
  },
  "marcacao-de-consultas-medicas": {
    titulo: "Marcação de Consultas Médicas",
    descricao: "Sistema para agendamento online de consultas populares, com foco em usabilidade e acessibilidade ampla.",
    tecnologias: ["Vue.js", "Laravel", "MySQL"],
    imagem: "/assets/marcacao.png"
  },
  "porto-seguro": {
    titulo: "Cyber Cheetahs – Porto Seguro",
    descricao: "Plataforma para diagnóstico inteligente de veículos, prontuário automotivo e capacitação de mecânicos.",
    tecnologias: ["React", "UX/UI", "Node.js"],
    imagem: "/assets/porto.jpg"
  },
  "ecolar": {
    titulo: "Ecolar",
    descricao: "WebApp que calcula a pegada de carbono doméstica e sugere ações para redução de custos e emissões.",
    tecnologias: ["React", "Node.js", "MySQL"],
    imagem: "/assets/ecolar.jpg"
  }
};
