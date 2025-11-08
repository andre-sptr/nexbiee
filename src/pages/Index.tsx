import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="items-center text-center">
          <div className="mb-4 rounded-full bg-gradient-hero p-4 text-white">
            <BookOpen className="h-12 w-12" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Welcome to Your Blank App
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl text-muted-foreground">
            Start building your amazing project here!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;