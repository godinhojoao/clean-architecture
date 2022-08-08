import { HttpRequest, HttpResponse } from './http'

export class Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
