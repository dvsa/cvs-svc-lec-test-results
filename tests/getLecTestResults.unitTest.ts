import { expect } from "chai";
import {LecTestResultsService} from "../src/services/LecTestResultsService";
import fs from "fs";
import path from "path";
import { ILecTestResult } from "../@Types/ILecTestResult";

describe("getLecTestResults", () => {
  let lecTestResultsService: LecTestResultsService | any;
  let MockTestResultsDAO: jest.Mock;
  let testResultsMockDB: any;
  beforeEach(() => {
    testResultsMockDB = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./resources/lec-test-results.json"), "utf8"));
    MockTestResultsDAO = jest.fn().mockImplementation(() => {
      return {};
    });
    lecTestResultsService = new LecTestResultsService(new MockTestResultsDAO());
  });
  afterEach(() => {
    testResultsMockDB = null;
    lecTestResultsService = null;
    MockTestResultsDAO.mockReset();
  });

  context("when records are found", () => {
    it("should return a populated response and status code 200", () => {
      MockTestResultsDAO = jest.fn().mockImplementation(() => {
        return {
          getLecTestResults: () => {
            return Promise.resolve(testResultsMockDB);
          }
        };
      });

      lecTestResultsService = new LecTestResultsService(new MockTestResultsDAO());
      return lecTestResultsService.getLecTestResults()
        .then((returnedRecords: ILecTestResult[]) => {
          expect(returnedRecords).to.not.equal(undefined);
          expect(returnedRecords).to.not.equal({});
          expect(JSON.stringify(returnedRecords)).to.equal(JSON.stringify(testResultsMockDB));
        });
    });
  });
});
