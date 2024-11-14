import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiSereverUrl = 'http://localhost:8081' ;

  constructor(private http: HttpClient) { }

  public getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiSereverUrl}/employee/all`);
  }

  public addEmployee(employee : Employee) : Observable<Employee> {
    return this.http.post<Employee>(`${this.apiSereverUrl}/employee/add`, employee);
  }

  public updateEmployee(employee : Employee) : Observable<Employee> {
    return this.http.put<Employee>(`${this.apiSereverUrl}/employee/update` , employee) ;
  }

  public deleteEmployee(employeeId : Number) :Observable<void> {
    return this.http.delete<void>(`${this.apiSereverUrl}/employee/delete/${employeeId}`) ;
  }
}
