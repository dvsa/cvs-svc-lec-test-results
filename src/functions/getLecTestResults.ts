import {LecTestResultsDAO} from "../models/LecTestResultsDAO";
import {LecTestResultsService} from "../services/LecTestResultsService";
import { HTTPResponse } from "../models/HTTPResponse";

export const getLecTestResults = () => {
  const lecTestResultsDAO = new LecTestResultsDAO();
  const lecTestResultsService = new LecTestResultsService(lecTestResultsDAO);

  return lecTestResultsService.getLecTestResults().then((data) => {
      return new HTTPResponse(200, data);
    });

};
