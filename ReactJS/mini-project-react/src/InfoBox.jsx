import "./infoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1469365556835-3da3db4c253b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWR5fGVufDB8fDB8fHww";



  return (
    <div className="infoBox">
      <h1>Weather Info</h1>
      <Card className="card" sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INIT_URL} title="cloudy sky" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Temperature: {info.temp}°C
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Humidity: {info.humidity}%
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Feels Like: {info.feelsLike}°C
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Weather: {info.weather}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
