import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AppConfigService {
  private _config: any = null;
  // Path to your config file
  private CONFIG_FILE_PATH = 'config.json';

  constructor(private http: HttpClient) { }

  /**
   * Get config by key
   *
   * @param {*} key
   * @returns
   * @memberof AppConfigService
   */
  public getConfig(key: any) {
    return this._config[key];
  }

  /**
   * Get the list of all configs
   *
   * @returns
   * @memberof AppConfigService
   */
  public getAllConfig() {
    return this._config;
  }

  /**
   * Load application configuration
   *
   * @returns
   * @memberof AppConfigService
   */
  public load() {
    return new Promise((resolve, reject) => {
      this.http.get(this.CONFIG_FILE_PATH).pipe(
        map((res: any) => res),
        catchError((error) => throwError(error))
      ).subscribe(confRes => {
        this._config = confRes;
        resolve(true);
      })
    });
  }
}
