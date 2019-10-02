import { default as unwrappedAWS } from "aws-sdk";
import { Configuration } from "../utils/Configuration";
import {ILecTestResult} from "./ILecTestResult";
import fs from "fs";
import path from "path";
/* tslint:disable */
const AWSXRay = require('aws-xray-sdk');
const AWS = AWSXRay.captureAWS(unwrappedAWS);
/* tslint:enable */

export class LecTestResultsDAO {
  // tslint:disable-next-line: no-empty
  constructor() {
  }

  public getLecTestResults() {
    const letTestResults = new Promise<ILecTestResult[]>(() => JSON.parse(fs.readFileSync(path.resolve(__dirname, "../resources/lec-test-results.json"), "utf8")));
    return letTestResults;
  }
}
