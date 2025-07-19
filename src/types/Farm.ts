export interface Farm {
  farmId: string;
  userId: string;
  farmName: string;
  farmAbout: string;
  farmProfileImg: string;
  farmCoverImg?: string;
  farmEmail: string;
  farmPhoneNr?: string;
  countryCode: string;
  streetName: string;
  city: string;
  country: string;
  county: string;
  buildingNr: string;
  postCode: string;
}
