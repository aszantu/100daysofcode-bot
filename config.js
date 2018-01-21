/* All keys are hidden in 'Config variables within Heroku, we wouldn't want your secret keys to be on public display */
module.exports = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
}
