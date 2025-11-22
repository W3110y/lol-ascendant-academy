import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChampionQuiz from "@/components/ChampionQuiz";

const QuizCampeones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="mb-4 text-5xl font-bold text-foreground">
            Encuentra tu Campeón Ideal
          </h1>
          <p className="text-xl text-muted-foreground">
            Responde estas preguntas y te recomendaremos el rol perfecto para ti
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ChampionQuiz />
        </div>
      </main>
    </div>
  );
};

export default QuizCampeones;
