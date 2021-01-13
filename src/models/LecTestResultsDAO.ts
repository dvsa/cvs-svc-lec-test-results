import fs from "fs";
import path from "path";
/* tslint:enable */

export class LecTestResultsDAO {
  // tslint:disable-next-line: no-empty
  constructor() {
  }

  public getLecTestResults() {
    return Promise.resolve(JSON.parse(fs.readFileSync(path.resolve(__dirname, "../resources/lec-test-results.json"), "utf8")));
  }
}
