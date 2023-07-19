import {Command, Flags} from '@oclif/core'

export default class GetSite extends Command {
  static description = 'get site from MK'

  static examples = [
    'get-site -i 1234',
  ]

  static flags = {
    id: Flags.string({char: 'i', description: 'id of the site to get', required: true}),
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(GetSite)

    if (flags.id) {
      this.log(`idSite: ${flags.id}`)
    }
    async run
  }
}
