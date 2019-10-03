import {LecTestResultsDAO} from "../models/LecTestResultsDAO";
import {LecTestResultsService} from "../services/LecTestResultsService";
import { ISubSeg } from "./ISubSeg";
import { HTTPResponse } from "../models/HTTPResponse";
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
   lecTestResultsService.getLecTestResults().then((data) => {
    return new HTTPResponse(200, data);
  })
  .catch((error) => {
     if (subseg) { subseg.addError(error.body); subseg.close(); }
     console.log("Error in getLecTestResults: ", error);
     return new HTTPResponse(error.statusCode, error.body);
  });
  } finally {
      if (subseg) { subseg.close(); }
  }
};
