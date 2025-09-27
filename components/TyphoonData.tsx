import { Card, CardTitle, CardHeader, CardContent } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { typhoonData } from "@/store/data";
import { format } from "date-fns";

export default function TyphoonTracker() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <h1 className="text-3xl font-bold text-center">🌪️ Typhoon Tracker</h1>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Latest Category</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="destructive" className="text-lg px-3 py-1">
              {typhoonData[typhoonData.length - 1].category}
            </Badge>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Max Wind Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              {Math.max(...typhoonData.map((d) => d.max_wind_kph))} kph
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Lowest Pressure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              {Math.min(...typhoonData.map((d) => d.central_pressure_hpa))} hPa
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Timeline */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Typhoon Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Lat</TableHead>
                  <TableHead>Lon</TableHead>
                  <TableHead>Wind (kph)</TableHead>
                  <TableHead>Pressure (hPa)</TableHead>
                  <TableHead>Movement</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {typhoonData.map((entry, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      {format(new Date(entry.time_iso), "MMM d, HH:mm")}
                    </TableCell>
                    <TableCell>{entry.lat.toFixed(2)}°N</TableCell>
                    <TableCell>{entry.lon.toFixed(2)}°E</TableCell>
                    <TableCell>{entry.max_wind_kph}</TableCell>
                    <TableCell>{entry.central_pressure_hpa}</TableCell>
                    <TableCell>
                      {entry.movement_bearing_deg}° @ {entry.movement_kph} kph
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          entry.category.includes("4")
                            ? "destructive"
                            : entry.category.includes("3")
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {entry.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">{entry.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
