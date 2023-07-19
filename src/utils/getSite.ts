import {config} from 'dotenv'

config()

const getSite = async (siteId: string) => {
  const response = await fetch(`https://api.kinsta.com/v2/sites/${siteId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.KINSTA_API_KEY}`,
    },
  })

  const site = await response.json()
  return site
}

export default getSite
