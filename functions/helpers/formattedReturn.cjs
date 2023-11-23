exports.formattedReturn = (statusCode, body) => {
  console.log("in formattedReturn!", {statusCode, body})
  return {
    statusCode,
    body: JSON.stringify(body),
  }
}