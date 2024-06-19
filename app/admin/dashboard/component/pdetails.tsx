import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Textarea } from "@/components/ui/textarea"
  
  interface PdetailsProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
  }

  export default function Pdeatails({ name, setName, description, setDescription } : PdetailsProps) {
    return (
      <Card className="bg-[#050B26]  text-white border border-dashed">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Enter product details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                className="w-full bg-[#050B26]"
                // defaultValue="Gamer Gear Pro Controller"
                value={name}
                placeholder="name of product"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="short description"
                value={description}
                className="min-h-32 bg-[#050B26]"
                onChange={(e) => setDescription(e.target.value)}

              />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
  