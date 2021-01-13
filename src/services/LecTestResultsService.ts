import { LecTestResultsDAO } from "../models/LecTestResultsDAO";

/**
 * Service for retrieving and creating Test Results from/into the db
 * @returns Promise
 */
export class LecTestResultsService {
  public readonly lecTestResultsDAO: LecTestResultsDAO;

  constructor(lecTestResultsDAO: LecTestResultsDAO) {
    this.lecTestResultsDAO = lecTestResultsDAO;
  }
  public async getLecTestResults() {
    return await this.lecTestResultsDAO.getLecTestResults();
  }

}
