import { Comune } from "./Comune"
import { bill } from "./Bills"


export interface Roles{
  roleName?:string
  }

  export interface User{
    id?:number,
    username?:string,
    email?:string,
    roles?:Roles[]
  }

  export interface UserData{
    content?: User[],
  pageable?: {
      "sort"?: {
          "unsorted"?: boolean,
          "empty"?: boolean,
          "sorted"?: boolean
      },
      "offset"?: number,
      "pageNumber"?: number,
      "pageSize"?: number,
      "paged"?: boolean,
      "unpaged"?: boolean
  },
  last?: boolean,
  totalPages?: number,
  totalElements?: number,
  number?: number,
  numberOfElements?: number,
  size?: number,
  first?: boolean,
  sort?: {
      "unsorted"?: boolean,
      "empty"?: boolean,
      "sorted"?: boolean
  },
  empty?: boolean
  }



export interface Client {
  id?: number,
  ragioneSociale?: string,
  partitaIva?: string,
  tipoCliente?: string,
  email?: string,
  pec?: string,
  telefono?: string,
  nomeContatto?: string,
  cognomeContatto?: string,
  telefonoContatto?: string,
  emailContatto?: string,
  indirizzoSedeOperativa?: {
      id: number,
      via: string,
      civico: string,
      cap: string,
      localita: string,
      comune: Comune
  },
  indirizzoSedeLegale?: {
      id: number,
      via: string,
      civico: string,
      cap: string,
      localita: string,
    comune:Comune
  }

}

export interface ClientData{
    content?:Client[],
    pageable?: {
      "sort"?: {
          "unsorted"?: boolean,
          "empty"?: boolean,
          "sorted"?: boolean
      },
      "offset"?: number,
      "pageNumber"?: number,
      "pageSize"?: number,
      "paged"?: boolean,
      "unpaged"?: boolean
  },
  last?: boolean,
  totalPages?: number,
  totalElements?: number,
  number?: number,
  numberOfElements?: number,
  size?: number,
  first?: boolean,
  sort?: {
      "unsorted"?: boolean,
      "empty"?: boolean,
      "sorted"?: boolean
  },
  empty?: boolean

}



export interface BillData{
    content?:bill[],
    pageable?: {
      "sort"?: {
          "unsorted"?: boolean,
          "empty"?: boolean,
          "sorted"?: boolean
      },
      "offset"?: number,
      "pageNumber"?: number,
      "pageSize"?: number,
      "paged"?: boolean,
      "unpaged"?: boolean
  },
  last?: boolean,
  totalPages?: number,
  totalElements?: number,
  number?: number,
  numberOfElements?: number,
  size?: number,
  first?: boolean,
  sort?: {
      "unsorted"?: boolean,
      "empty"?: boolean,
      "sorted"?: boolean
  },
  empty?: boolean

}




export interface newBills{
  data?: string,
  numero?: number,
  anno?: number,
  importo?: number,
  stato?: {
    "id"?: number,
    "nome"?: string
  }
}
