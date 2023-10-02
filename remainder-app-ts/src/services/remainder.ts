import axios from "axios"
import Remainder from "../models/Remainder"

const BASEURL = "https://jsonplaceholder.typicode.com/"

class RemainderService {
  http = axios.create({
    baseURL: BASEURL,
  })

  async getRemainders() {
    const response = await this.http.get<Remainder[]>("/todos")
    return response.data
  }

  async addRemainder(title: string) {
    const response = await this.http.post<Remainder>("/todos", { title })
    return response.data
  }

  async removeRemainder(id: number) {
    const response = await this.http.delete("/todos/" + id)
    return response.data
  }
}

export default new RemainderService()
