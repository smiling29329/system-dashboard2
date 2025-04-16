export default function handler(req, res) {
  res.status(200).json([
    { name: "Monday", value: 10 },
    { name: "Tuesday", value: 20 },
    { name: "Wednesday", value: 30 },
    { name: "Thursday", value: 40 },
    { name: "Friday", value: 50 },
  ]);
}
