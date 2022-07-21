import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class Emitters {
  static authSubject = new Subject<boolean>();
}
