import {defineFeature, loadFeature} from "jest-cucumber";
import supertest from "supertest";
import path from "path";

const url = "http://localhost:3006/";
const request = supertest(url);

import mockData from "../../resources/lec-test-results.json";
import * as _ from "lodash";

const feature = loadFeature(path.resolve(__dirname, "../7649.ACs.feature"));

defineFeature(feature, (test) => {
  test("AC1.1 fetch all LEC results", ({given, when, then, and}) => {
    let requestUrl: string;
    let response: any;
    let expectedResponse: any;
    given("I am an API Consumer", () => {
      requestUrl = "lec-test-results";
    });
    when("I send a GET request to localhost/lec-results", async () => {
      response = await request.get(requestUrl);
    });
    then("the the system returns array of lecTestResult stub data for today in json format", () => {
      expectedResponse = _.cloneDeep(mockData);
      expect(expectedResponse).toEqual(response.body);
    });
    and("the system returns an HTTP status code 200 OK", () => {
      expect(response.status).toEqual(200);
    });
  });
});
