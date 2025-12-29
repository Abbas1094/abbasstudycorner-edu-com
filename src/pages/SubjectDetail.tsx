import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { subjects } from '@/data/subjectsConfig';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';

const SubjectDetail = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  
  const subject = subjects.find(s => s.id === subjectId);
  
  if (!subject) {
    return (
      <div className="min-h-screen bg-gradient-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Subject not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  const totalMCQs = subject.chapters.reduce((total, ch) => total + ch.mcqs.length, 0);

  return (
    <div className="min-h-screen bg-gradient-navy py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{subject.icon}</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            {subject.name}
          </h1>
          <p className="text-muted-foreground">{subject.description}</p>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <span className="text-primary">{subject.chapters.length} Chapters</span>
            <span className="text-ocean">{totalMCQs} MCQs</span>
          </div>
        </div>

        <div className="grid gap-3">
          {subject.chapters.map((chapter, index) => (
            <Card 
              key={chapter.id}
              onClick={() => navigate(`/quiz/${subjectId}/${chapter.id}`)}
              className="bg-card/50 border-border/50 p-4 cursor-pointer card-hover group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                  {chapter.icon}
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {chapter.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{chapter.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{chapter.mcqs.length} MCQs</span>
                <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;
