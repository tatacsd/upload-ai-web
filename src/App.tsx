import { Button } from '@/components/ui/button';
import { FileVideo, Github, Upload, Wand2 } from 'lucide-react';
import { Label } from './components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import { Separator } from './components/ui/separator';
import { Slider } from './components/ui/slider';
import { Textarea } from './components/ui/textarea';
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
      <main className="flex-1 flex p-6 gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Add the prompt to the AI"
            />
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Result generated by the AI"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Tip: you can use the variable{' '}
            <code className="text-violet-400">{'{transcription}'}</code> in your
            prompt to add the content of the description of the selected video
          </p>
        </div>
        <aside className="w-80 space-y-6">
          {/* Video form */}
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex round-lg aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Select a video
            </label>
            <input
              className="sr-only" // hide the input
              type="file"
              id="video"
              name="video"
              accept="video/mp4"
            />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Transcription Prompt</Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder='Add keyword separed by "," Ex: "Hello, World"'
              />
            </div>

            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4 ml-2" />
              Upload video
            </Button>
          </form>

          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Video title</SelectItem>
                  <SelectItem value="description">Video description</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Model</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                You can change the model settings later
              </span>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Temperature</Label>
              <Slider min={0} max={1} step={0.1} className="w-full" />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                High temperature inputs will result in more creative outputs and
                less accurate outputs, while low temperature inputs will result
                in more predictable outputs.
              </span>
            </div>

            <Separator />
            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2"
            >
              <Wand2 className="w-4 h-4 ml-2" />
              Generate
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
