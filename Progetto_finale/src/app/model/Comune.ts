import { Provincia } from "./Provincia"


export interface Comune{
  id: number,
  nome: string,
  provincia: Provincia
}
