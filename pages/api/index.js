// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function saving(req, res) {
  if (req.method === 'post') {
    const body = JSON.parse(req.body);
    let resBody = []
    let summa = body.summa
    for (let i = 0; i <= body.time; i++) {
      resBody.push({
          name: i+" year",
          uv: summa
        }
      )
      summa = summa + summa*(body.percent/100)
    }
    res.status(200).json(resBody)
  } else {
    res.status(400).send({message: 'Only POST requests allowed'});
  }
}
