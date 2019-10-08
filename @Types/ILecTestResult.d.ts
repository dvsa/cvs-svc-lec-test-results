interface ILecTestResult {
  currentRegMark: string;
  vin: string;
  certificateSerialNumber: string;
  modType: string;
  testStatus: number;
  emissionCode: number;
  validFromDate: string;
  certificateExpiryDate: string;
  certificateIssueDate: string;
  stationId: string;
}

export {ILecTestResult};
