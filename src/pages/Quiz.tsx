import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { subjects } from '@/data/subjectsConfig';
import { ArrowLeft, CheckCircle, XCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const Quiz = () => {
  const { subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  
  const subject = subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{selected: number, correct: number}[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  if (!subject || !chapter) {
    return (
      <div className="min-h-screen bg-gradient-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Quiz not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  const mcqs = chapter.mcqs;
  const currentMCQ = mcqs[currentIndex];
  const progress = ((currentIndex + 1) / mcqs.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === currentMCQ.correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);
    
    setAnswers(prev => [...prev, { selected: answerIndex, correct: currentMCQ.correctAnswer }]);
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
            <h1 className="font-display text-3xl font-bold mb-4">Quiz Complete!</h1>
            <div className="text-6xl mb-4">
              {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
            </div>
            <p className="text-4xl font-bold text-primary mb-2">{score}/{mcqs.length}</p>
            <p className="text-muted-foreground mb-6">{percentage}% Score</p>
            <p className="text-lg mb-8">
              {percentage >= 80 ? 'Excellent work! Keep it up!' : 
               percentage >= 60 ? 'Good job! Room for improvement.' : 
               'Keep practicing, you\'ll get better!'}
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate(`/subject/${subjectId}`)}>
                Back to Chapters
              </Button>
              <Button onClick={() => {
                setCurrentIndex(0);
                setScore(0);
                setAnswers([]);
                setQuizComplete(false);
                setSelectedAnswer(null);
                setShowResult(false);
              }}>
                Retry Quiz
              </Button>
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
          <Button variant="ghost" onClick={() => navigate(`/subject/${subjectId}`)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Exit
          </Button>
          <div className="text-sm text-muted-foreground">
            {currentIndex + 1} / {mcqs.length}
          </div>
        </div>

        <Progress value={progress} className="mb-6 h-2" />

        <Card className="bg-card/50 p-6 mb-6">
          <p className="text-sm text-primary mb-2">{chapter.name}</p>
          <h2 className="text-xl font-semibold mb-6">{currentMCQ.question}</h2>
          
          <div className="grid gap-3">
            {currentMCQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentMCQ.correctAnswer;
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={cn(
                    "w-full text-left p-4 rounded-lg border transition-all",
                    !showResult && "hover:border-primary hover:bg-primary/5",
                    showResult && isCorrect && "border-success bg-success/10",
                    showResult && isSelected && !isCorrect && "border-destructive bg-destructive/10",
                    !showResult && "border-border"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{String.fromCharCode(65 + index)}. {option}</span>
                    {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-success" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-destructive" />}
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && currentMCQ.explanation && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium mb-1">Explanation:</p>
              <p className="text-sm text-muted-foreground">{currentMCQ.explanation}</p>
            </div>
          )}
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

export default Quiz;
