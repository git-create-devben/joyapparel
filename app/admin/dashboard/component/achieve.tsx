import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function  Achieve() {
  return (
    <Card className="bg-[#050B26] border border-dashed text-white hidden">
      <CardHeader>
        <CardTitle>????????</CardTitle>
        <CardDescription>
          New feature coming soon
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div></div>
        <Button size="sm" variant="secondary">
          New
        </Button>
      </CardContent>
    </Card>
  )
}
