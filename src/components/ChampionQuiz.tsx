import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    score: { [key: string]: number };
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Prefieres atacar desde lejos o en combate cuerpo a cuerpo?",
    options: [
      { text: "Desde lejos, me siento más seguro", score: { ADC: 2, Mid: 1 } },
      { text: "Cuerpo a cuerpo, me gusta la acción", score: { Top: 2, Jungla: 1 } },
      { text: "Un balance de ambos", score: { Mid: 2, Soporte: 1 } },
    ],
  },
  {
    id: 2,
    question: "¿Qué rol te gustaría tener en el equipo?",
    options: [
      { text: "Proteger y ayudar a mis compañeros", score: { Soporte: 3 } },
      { text: "Hacer el mayor daño posible", score: { ADC: 2, Mid: 2 } },
      { text: "Ser resistente y aguantar daño", score: { Top: 3 } },
      { text: "Moverme por el mapa ayudando a todos", score: { Jungla: 3 } },
    ],
  },
  {
    id: 3,
    question: "¿Cómo te gusta jugar?",
    options: [
      { text: "Agresivo desde el inicio", score: { Jungla: 2, Mid: 1 } },
      { text: "Paciente, espero el momento perfecto", score: { ADC: 2, Top: 1 } },
      { text: "Me adapto según la situación", score: { Soporte: 2, Mid: 1 } },
    ],
  },
];

const roleRecommendations: { [key: string]: { name: string; description: string; champions: string[] } } = {
  Soporte: {
    name: "Soporte",
    description: "Proteges a tus aliados y controlas el mapa con visión",
    champions: ["Lux", "Sona", "Janna"],
  },
  ADC: {
    name: "ADC (Tirador)",
    description: "Haces mucho daño desde la distancia en el late game",
    champions: ["Ashe", "Miss Fortune", "Caitlyn"],
  },
  Mid: {
    name: "Mid (Medio)",
    description: "Controlas el centro del mapa con alto daño mágico o físico",
    champions: ["Lux", "Annie", "Veigar"],
  },
  Top: {
    name: "Top (Arriba)",
    description: "Eres un luchador resistente que aguanta y hace daño",
    champions: ["Garen", "Darius", "Malphite"],
  },
  Jungla: {
    name: "Jungla",
    description: "Te mueves por el mapa ayudando a todas las líneas",
    champions: ["Master Yi", "Warwick", "Amumu"],
  },
};

const ChampionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({
    Soporte: 0,
    ADC: 0,
    Mid: 0,
    Top: 0,
    Jungla: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (scoreData: { [key: string]: number }) => {
    const newScores = { ...scores };
    Object.keys(scoreData).forEach((role) => {
      newScores[role] = (newScores[role] || 0) + scoreData[role];
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getTopRole = () => {
    return Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ Soporte: 0, ADC: 0, Mid: 0, Top: 0, Jungla: 0 });
    setShowResult(false);
  };

  if (showResult) {
    const topRole = getTopRole();
    const recommendation = roleRecommendations[topRole];

    return (
      <Card className="border-accent/20">
        <CardHeader className="text-center">
          <div className="mb-4">
            <div className="text-6xl mb-2">🎯</div>
            <Badge className="bg-accent/20 text-accent border-accent/40 text-lg px-4 py-2">
              Tu Rol Ideal
            </Badge>
          </div>
          <CardTitle className="text-3xl">{recommendation.name}</CardTitle>
          <CardDescription className="text-base">{recommendation.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">Campeones Recomendados para Empezar:</h3>
            <div className="flex flex-wrap gap-2">
              {recommendation.champions.map((champion) => (
                <Badge key={champion} variant="outline" className="text-base px-4 py-2 border-accent/40">
                  {champion}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              onClick={() => navigate("/roles")} 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Ver Guía de Roles
            </Button>
            <Button 
              onClick={() => navigate("/campeones")} 
              variant="outline"
              className="w-full"
            >
              Explorar Campeones
            </Button>
            <Button 
              onClick={resetQuiz} 
              variant="ghost"
              className="w-full"
            >
              Repetir Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="border-accent/20">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">
            Pregunta {currentQuestion + 1} de {questions.length}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {Math.round(((currentQuestion) / questions.length) * 100)}% completado
          </span>
        </div>
        <CardTitle className="text-2xl">{question.question}</CardTitle>
        <CardDescription>Elige la opción que más se ajuste a ti</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswer(option.score)}
            variant="outline"
            className="w-full justify-between h-auto py-4 px-6 text-left hover:border-accent/60 hover:bg-accent/5"
          >
            <span className="text-base">{option.text}</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default ChampionQuiz;
