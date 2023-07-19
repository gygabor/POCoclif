import {Command, Flags} from '@oclif/core'
import getSite from '../utils/getSite'

export default class GetSite extends Command {
  static description = 'get site from MK'

  static examples = [
    'get-site -i 1234',
  ]

  static flags = {
    id: Flags.string({char: 'i', description: 'id of the site to get', required: true, summary: 'brief summary'}),
  }

  public async run(): Promise<void> {
    try {
      const {flags} = await this.parse(GetSite)

      if (flags.id) {
        this.log(`idSite: ${flags.id}`)
      }

      const site = await getSite(flags.id)
      this.log(`site: ${JSON.stringify(site, null, 2)}`)
    } catch (error: any) {
      this.log(error.message)
    }
  }
}
