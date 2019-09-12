const express = require('express')
const axios =require ('axios');
const clientID = 'Grknn3E4x5vttehnnNhPMHxC'
const clientSecret = 'sec_6RbrMNvxaAsq7wx4GmyPeoWnthXZ5crqD0uNrTVrhpxRR84qlUgQiqSpsosmzqRjonw97G3p2XTJ3yBO'
const redirect_uri = 'http://localhost:3000/oauth/redirect'
const grant_type = 'authorization_code'

const app = express()
app.use(express.static(__dirname + '/public'))

app.get('/oauth/redirect', (req, res) => {
  const requestCode = req.query.code
  // console.log('Code', requestCode)
  // console.log('id', clientID)
  // console.log('secret', clientSecret)
  // console.log('redirect', redirect_uri)
  // console.log('grant', grant_type)
  // console.log('code', requestCode)
  // axios({
  //   method: 'post',
  //   url: 'https://wakatime.com/oauth/token',
  //   data: {
  //     'client_id': clientID,
  //     'client_secret': clientSecret,
  //     'redirect_uri': redirect_uri,
  //     'grant_type': grant_type,
  //     'code': requestCode
  //   }
  // })
  const data = {
    client_id: clientID,
    client_secret: clientSecret,
    redirect_uri: redirect_uri,
    grant_type: grant_type,
    code: requestCode
  }
  console.log('Data', data)
  axios.post('https://wakatime.com/oauth/token', {
    ...data
  }, {
    headers: {
      'Accept': 'application/x-www-form-urlencoded'
  }}
  )
  .then((response) => {
    console.log('Response', response)
    // Once we get the response, extract the access token from
    // the response body 
    // const accessToken = response.data.access_token

    // redirect the user to the welcome page, along with the access token
    // res.redirect(`/welcome.html?access_token=${accessToken}`)t
  })
  .catch(error => {
    console.log(error.message)
  })
})

app.listen(3000)
console.log('Listening To Port 3000');