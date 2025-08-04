export const projetosDetalhados: Record<string, {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem?: string;
}> = {
  "mottu": {
    titulo: "Challenge Mottu",
    descricao: "Sistema inteligente para mapeamento de pátios com QR Codes, BLE e IoT embarcado, otimizando localização de motos.",
    tecnologias: ["React", "Node.js", "BLE", "ESP32", "RSSI", "MQTT", "PostgreSQL"],
    imagem: "/assets/mottu.jpg"
  },
  "conexao-solidaria": {
    titulo: "Conexão Solidária",
    descricao: "App offline via Bluetooth Mesh para comunicação em áreas sem internet durante emergências e desastres naturais.",
    tecnologias: ["React Native", "SQLite", "Spring Boot", "BLE"],
    imagem: "/assets/conexao.png"
  },
  "agua-viva": {
    titulo: "Água Viva",
    descricao: "App de voluntariado ecológico que recompensa ações ambientais com experiências em viagens sustentáveis.",
    tecnologias: ["React.js", "Node.js", "PostgreSQL", "Mapbox"],
    imagem: "/assets/aguaviva.jpg"
  },
  "marcacao-de-consultas-medicas": {
    titulo: "Marcação de Consultas Médicas",
    descricao: "Sistema para agendamento online de consultas populares, com foco em usabilidade e acessibilidade ampla.",
    tecnologias: ["PL/SQL", "Typescript", "React", "React Native", "UX/UI"],
    imagem: "/assets/marcacao.png"
  },
  "porto-seguro": {
    titulo: "Porto Seguro",
    descricao: "Plataforma para diagnóstico inteligente de veículos, prontuário automotivo e capacitação de mecânicos.",
    tecnologias: ["API REST", "UX/UI", "Node.js", "React", "Spring Boot", "MySQL"],
    imagem: "/assets/porto.jpg"
  },

};
