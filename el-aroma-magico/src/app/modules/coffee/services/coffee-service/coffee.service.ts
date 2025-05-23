import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../../models/coffee';

@Injectable()
export class CoffeeService {

  constructor(private httpClient: HttpClient) {

  }

  listCoffee(): Observable<Array<Coffee>> {
    return this.httpClient.get<Array<Coffee>>("https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json")
  }

}
