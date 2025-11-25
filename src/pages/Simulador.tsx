import { useState } from "react";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";

interface Decision {
  text: string;
  isCorrect: boolean;
  explanation: string;
}

interface Scenario {
  id: number;
  category: string;
  title: string;
  situation: string;
  decisions: Decision[];
}

const scenarios: Scenario[] = [
  {
    id: 1,
    category: "Early Game",
    title: "Primera Oleada",
    situation: "Acabas de llegar a tu línea. La primera oleada de minions está llegando. ¿Qué deberías hacer?",
    decisions: [
      {
        text: "Atacar al campeón enemigo inmediatamente",
        isCorrect: false,
        explanation: "Atacar al campeón enemigo tan temprano te hará recibir daño de sus minions, lo que te dejará en desventaja de vida."
      },
      {
        text: "Esperar a que los minions se ataquen entre sí y dar el último golpe",
        isCorrect: true,
        explanation: "¡Correcto! Esto se llama 'last hitting' o 'farmear'. Solo recibes oro cuando das el golpe final, así que espera el momento adecuado."
      },
      {
        text: "Usar todas tus habilidades en los minions",
        isCorrect: false,
        explanation: "Gastarás tu maná demasiado rápido y el enemigo puede aprovechar para atacarte cuando no tengas recursos."
      }
    ]
  },
  {
    id: 2,
    category: "Objetivos",
    title: "Torre Caída",
    situation: "Acabas de destruir la torre enemiga en tu línea. ¿Qué deberías hacer ahora?",
    decisions: [
      {
        text: "Quedarte en línea y seguir farmeando",
        isCorrect: false,
        explanation: "Una vez caída la torre, la línea es menos segura para ti. Es momento de buscar otras oportunidades."
      },
      {
        text: "Rotar a ayudar a otras líneas o tomar objetivos neutrales",
        isCorrect: true,
        explanation: "¡Perfecto! Con tu torre caída, debes aprovechar tu ventaja para ayudar al equipo en otras zonas del mapa."
      },
      {
        text: "Volver a base a comprar sin motivo",
        isCorrect: false,
        explanation: "Volver sin aprovechar tu ventaja desperdicia tiempo valioso donde podrías estar presionando otras zonas."
      }
    ]
  },
  {
    id: 3,
    category: "Teamfights",
    title: "Iniciando Pelea",
    situation: "Tu equipo está cerca del Dragón y ves a un enemigo solo. ¿Qué haces?",
    decisions: [
      {
        text: "Atacar inmediatamente al enemigo solo",
        isCorrect: false,
        explanation: "Puede ser una trampa. El resto del equipo enemigo podría estar cerca esperando que inicies."
      },
      {
        text: "Pedir a tu equipo que venga y chequear con wards antes",
        isCorrect: true,
        explanation: "¡Excelente! Siempre verifica la situación antes de comprometerte. La visión salva vidas."
      },
      {
        text: "Ignorarlo y empezar el Dragón solo",
        isCorrect: false,
        explanation: "El Dragón hace mucho daño y sin tu equipo eres vulnerable. El enemigo puede robarlo o matarte."
      }
    ]
  },
  {
    id: 4,
    category: "Late Game",
    title: "Decisión Final",
    situation: "Es minuto 35, todo tu equipo está vivo y acabas de ganar una pelea. ¿Qué objetivo priorizas?",
    decisions: [
      {
        text: "Ir directo al Nexo enemigo",
        isCorrect: false,
        explanation: "Pueden revivirán antes de que llegues y defender fácilmente. Es mejor asegurar un objetivo primero."
      },
      {
        text: "Tomar el Barón Nashor primero",
        isCorrect: true,
        explanation: "¡Correcto! El buff del Barón te dará súper minions y poder para empujar con seguridad hacia el Nexo."
      },
      {
        text: "Volver a farmear la jungla",
        isCorrect: false,
        explanation: "Farmear cuando acabas de ganar una pelea desperdicia tu ventaja temporal. Debes presionar objetivos."
      }
    ]
  },
  {
    id: 5,
    category: "Early Game",
    title: "Bajo Torre",
    situation: "Tu vida está baja y el enemigo te está persiguiendo hacia tu torre. ¿Qué deberías hacer?",
    decisions: [
      {
        text: "Pelear bajo tu torre porque hace daño al enemigo",
        isCorrect: false,
        explanation: "Si tu vida está muy baja, el enemigo puede matarte antes de que la torre lo mate a él. Es muy arriesgado."
      },
      {
        text: "Retirarte más atrás y usar una poción mientras escapas",
        isCorrect: true,
        explanation: "¡Bien pensado! Sobrevivir es más importante que perder algunos minions. Puedes volver después de curarte."
      },
      {
        text: "Intentar farmear los minions bajo torre",
        isCorrect: false,
        explanation: "Con poca vida, el enemigo puede matarte fácilmente incluso bajo torre. Tu vida vale más que unos minions."
      }
    ]
  },
  {
    id: 6,
    category: "Objetivos",
    title: "Decisión de Dragón",
    situation: "El equipo enemigo está haciendo el Dragón. Tu equipo puede llegar pero llegarán primero ellos. ¿Qué haces?",
    decisions: [
      {
        text: "Ir corriendo a robarlo solo",
        isCorrect: false,
        explanation: "Ir solo significa muerte casi segura. El enemigo te matará y se llevará el Dragón de todas formas."
      },
      {
        text: "Esperar a tu equipo y pelear juntos por el objetivo",
        isCorrect: true,
        explanation: "¡Exacto! La coordinación de equipo es clave. Una buena pelea de equipo puede recuperar el objetivo."
      },
      {
        text: "Ignorar el Dragón y pushear una línea solo",
        isCorrect: false,
        explanation: "Los dragones dan buffs permanentes muy valiosos. Es mejor disputarlo en equipo que dejarlo gratis."
      }
    ]
  }
];

const Simulador = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedDecision, setSelectedDecision] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredScenarios, setAnsweredScenarios] = useState(0);

  const handleSubmit = () => {
    if (selectedDecision === null) return;
    
    setShowResult(true);
    setAnsweredScenarios(prev => prev + 1);
    
    if (scenarios[currentScenario].decisions[selectedDecision].isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1);
      setSelectedDecision(null);
      setShowResult(false);
    } else {
      // Reset to start
      setCurrentScenario(0);
      setSelectedDecision(null);
      setShowResult(false);
      setCorrectAnswers(0);
      setAnsweredScenarios(0);
    }
  };

  const scenario = scenarios[currentScenario];
  const progressPercentage = ((currentScenario + 1) / scenarios.length) * 100;
  const accuracyPercentage = answeredScenarios > 0 ? (correctAnswers / answeredScenarios) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Simulador de Decisiones
            </h1>
            <p className="text-xl text-muted-foreground">
              Practica tomar las decisiones correctas en situaciones comunes del juego
            </p>
          </div>

          {/* Progress Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{currentScenario + 1}/{scenarios.length}</div>
                  <div className="text-sm text-muted-foreground">Escenarios</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-lol-gold">{accuracyPercentage.toFixed(0)}%</div>
                  <div className="text-sm text-muted-foreground">Precisión</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Progress value={progressPercentage} className="h-2" />

          {/* Scenario Card */}
          <Card className="border-lol-blue/30">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{scenario.category}</Badge>
                <span className="text-sm text-muted-foreground">
                  Escenario {currentScenario + 1}
                </span>
              </div>
              <CardTitle className="text-2xl">{scenario.title}</CardTitle>
              <CardDescription className="text-base">{scenario.situation}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Decisions */}
              <RadioGroup
                value={selectedDecision?.toString()}
                onValueChange={(value) => !showResult && setSelectedDecision(parseInt(value))}
                disabled={showResult}
              >
                <div className="space-y-3">
                  {scenario.decisions.map((decision, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all ${
                        showResult
                          ? decision.isCorrect
                            ? "border-green-500/50 bg-green-500/10"
                            : selectedDecision === index
                            ? "border-red-500/50 bg-red-500/10"
                            : "border-border/30 bg-card-foreground/5"
                          : selectedDecision === index
                          ? "border-accent bg-accent/10"
                          : "border-border/30 hover:border-accent/50 hover:bg-accent/5"
                      }`}
                    >
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                      <div className="flex-1">
                        <Label
                          htmlFor={`option-${index}`}
                          className="text-base font-medium cursor-pointer flex items-start gap-2"
                        >
                          {showResult && decision.isCorrect && (
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                          )}
                          {showResult && !decision.isCorrect && selectedDecision === index && (
                            <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                          )}
                          <span>{decision.text}</span>
                        </Label>
                        {showResult && (selectedDecision === index || decision.isCorrect) && (
                          <div className="mt-3 p-3 rounded-lg bg-accent/5 border border-accent/20 flex gap-2">
                            <Lightbulb className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">{decision.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {!showResult ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={selectedDecision === null}
                    className="flex-1"
                    size="lg"
                  >
                    Confirmar Decisión
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="flex-1" size="lg">
                    {currentScenario < scenarios.length - 1 ? "Siguiente Escenario" : "Volver al Inicio"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Simulador;
