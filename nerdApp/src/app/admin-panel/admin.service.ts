import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  loggedInUsername: string = '';
}
