import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PstatusProps {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

export default function Pstatus({ status, setStatus }: PstatusProps) {
  const handleChange = (value: string) => {
    setStatus(value);
  };

  return (
    <Card className="bg-[#050B26] border border-dashed text-white">
      <CardHeader>
        <CardTitle>Product Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={handleChange}>
              <SelectTrigger id="status" aria-label="Select status" className="bg-[#050B26]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
