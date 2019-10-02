import { HTTPError } from "../models/HTTPError";
import { LecTestResultsDAO } from "../models/LecTestResultsDAO";
import * as Joi from "joi";
import * as dateFns from "date-fns";
import { MESSAGES, ERRORS } from "../assets/Enums";
import { ValidationError, ValidationResult } from "joi";
import { ILecTestResult } from "../models/ILecTestResult";
import { HTTPResponse } from "../models/HTTPResponse";

/**
 * Service for retrieving and creating Test Results from/into the db
 * @returns Promise
 */
export class LecTestResultsService {
  public readonly lecTestResultsDAO: LecTestResultsDAO;

  constructor(lecTestResultsDAO: LecTestResultsDAO) {
    this.lecTestResultsDAO = lecTestResultsDAO;
  }

  public getLecTestResults(): Promise<ILecTestResult[]> {
  return this.lecTestResultsDAO.getLecTestResults();
  }

}
