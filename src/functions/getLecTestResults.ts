import {LecTestResultsDAO} from "../models/LecTestResultsDAO";
import {LecTestResultsService} from "../services/LecTestResultsService";
import { ISubSeg } from "./ISubSeg";
/* workaround AWSXRay.captureAWS(...) call obscures types provided by the AWS sdk.
https://github.com/aws/aws-xray-sdk-node/issues/14
*/
/* tslint:disable */
const AWSXRay = require('aws-xray-sdk');
/* tslint:enable */



export const getLecTestResults = async () => {
  const segment = AWSXRay.getSegment();
  AWSXRay.capturePromise();
  let subseg: ISubSeg | null = null;
  if (segment) {
    subseg = segment.addNewSubsegment("getLecTestResults");
  }
  const lecTestResultsDAO = new LecTestResultsDAO();
  const lecTestResultsService = new LecTestResultsService(lecTestResultsDAO);

  try {
   lecTestResultsService.getLecTestResults();
  } finally {
    if (subseg) { subseg.close(); }
  }
};
