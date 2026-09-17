export const getStatus = (req, res) => {
  res.status(200).json({
    status: "OK",
    service: "Portfolio Service API",
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString()
  })
}