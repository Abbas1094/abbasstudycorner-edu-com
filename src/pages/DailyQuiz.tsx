import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getRandomMCQs } from '@/data/subjectsConfig';
import { ArrowLeft, CheckCircle, XCircle, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const DailyQuiz = () => {
  const navigate = useNavigate();
  const [mcqs] = useState(() => getRandomMCQs(30));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentMCQ = mcqs[currentIndex];
  const progress = ((currentIndex + 1) / mcqs.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    if (answerIndex === currentMCQ.correctAnswer) setScore(prev => prev + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= mcqs.length) {
      setQuizComplete(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  if (quizComplete) {
    const percentage = Math.round((score / mcqs.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-navy py-8 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <Card className="bg-card/50 p-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span>Daily Quiz Complete!</span>
            </div>
            <div className="text-6xl mb-4">{percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}</div>
            <p className="text-4xl font-bold text-primary mb-2">{score}/{mcqs.length}</p>
            <p className="text-muted-foreground mb-8">{percentage}% Score</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate('/')}>Back Home</Button>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-navy py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />Exit
          </Button>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm">{currentIndex + 1}/{mcqs.length}</span>
          </div>
        </div>
        <Progress value={progress} className="mb-6 h-2" />
        <Card className="bg-card/50 p-6 mb-6">
          <p className="text-sm text-primary mb-2">{currentMCQ.subjectName}</p>
          <h2 className="text-xl font-semibold mb-6">{currentMCQ.question}</h2>
          <div className="grid gap-3">
            {currentMCQ.options.map((option: string, index: number) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentMCQ.correctAnswer;
              return (
                <button key={index} onClick={() => handleAnswer(index)} disabled={showResult}
                  className={cn(
                    "w-full text-left p-4 rounded-lg border transition-all",
                    !showResult && "hover:border-primary hover:bg-primary/5 border-border",
                    showResult && isCorrect && "border-success bg-success/10",
                    showResult && isSelected && !isCorrect && "border-destructive bg-destructive/10"
                  )}>
                  <div className="flex items-center justify-between">
                    <span>{String.fromCharCode(65 + index)}. {option}</span>
                    {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-success" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-destructive" />}
                  </div>
                </button>
              );
            })}
          </div>
        </Card>
        {showResult && (
          <Button onClick={handleNext} className="w-full">
            {currentIndex + 1 >= mcqs.length ? 'See Results' : 'Next Question'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DailyQuiz;
