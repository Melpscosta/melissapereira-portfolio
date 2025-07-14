export const projetosDetalhados: Record<string, {
  github?: string;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem?: string;
  link?: string;
}> = {
  "mottu": {
    titulo: "Mottu",
    descricao: "Sistema interno para controle de entregas, notificações e interface aprimorada para o time operacional.",
    tecnologias: ["React", "TypeScript", "Firebase"],
    imagem: "../../public/assets/mottu.jpg",
    link: "https://mottu.com.br",
    github: "https://github.com/Melpscosta/mottu"
  },
  "conexao-solidaria": {
    titulo: "Conexão Solidária",
    descricao: "Plataforma web que conecta voluntários a ONGs, com painéis administrativos e suporte para doações.",
    tecnologias: ["Next.js", "Tailwind", "Node.js"],
    imagem: "/assets/conexao.png",
    github: "https://github.com/Melpscosta/conexao-solidaria"
  },
  "agua-viva": {
    titulo: "Água Viva",
    descricao: "Aplicativo mobile com alertas ambientais para regiões ribeirinhas. Funciona offline e coleta dados locais.",
    tecnologias: ["Flutter", "Firebase", "Mapbox"],
    imagem: "../../public/assets/aguaviva.jpg",
    github: "https://github.com/Melpscosta/agua-viva"
  },
  "marcacao-de-consultas-medicas": {
    titulo: "Marcação de Consultas Médicas",
    descricao: "Sistema online para agendamento de consultas em clínicas populares, com foco em acessibilidade.",
    tecnologias: ["Vue.js", "Laravel", "MySQL"],
    imagem: "/assets/marcacao.png",
    github: "https://github.com/Melpscosta/marcacao-consultas"
  },
  "porto-seguro": {
    titulo: "Porto Seguro",
    descricao: "Dashboard para corretores acompanharem sinistros e propostas em tempo real, com visual moderno e responsivo.",
    tecnologias: ["React", "Redux", "SASS"],
    imagem: "../../public/assets/porto.jpg",
    github: "https://github.com/Melpscosta/porto-seguro"
  }
};
