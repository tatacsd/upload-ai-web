import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Separator } from './components/ui/separator';
export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold ">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed during NLW 💜
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant={'outline'}>
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
      <main className="flex-1 p-6 gap-6"></main>
    </div>
  );
}
