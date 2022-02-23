import { MongoClient, Collection } from 'mongodb'

// export class MongoHelper {
//     private client: MongoClient | undefined;

//     constructor(private readonly uri: string){}

//     async connect (uri: string): Promise<void> {
//         this.client = await MongoClient.connect(uri)
//     }

//     async disconnect (): Promise<void> {
//         if(this.client){
//             await this.client.close();
//             this.client = undefined;
//         }
//     }

//     getCollection (name: string): Collection | undefined {
//         if(this.client)
//             return this.client.db().collection(name)
//     }

//     map (data: any): any {
//         const { _id, ...rest } = data
//         return { ...rest, id: _id.toHexString() }
//     }

//     mapCollection (collection: any[]): any[] {
//         return collection.map(c => this.map(c))
//     }
// }

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    // this.client = null
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (data: any): any => {
    const { _id, ...rest } = data
    return { ...rest, id: _id.toHexString() }
  },

  mapCollection: (collection: any[]): any[] => {
    return collection.map(c => MongoHelper.map(c))
  }
}