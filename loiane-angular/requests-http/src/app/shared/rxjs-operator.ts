import { HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http";
import { filter, pipe, tap } from "rxjs";

export function filterResponse<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    tap((event: HttpEvent<T>) => (<HttpResponse<T>>event).body)
  );
}

export function uploadProgress<T>(callback: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      callback(Math.trunc(100 * event.loaded / (event.total || 1)));
    }
  });
}
