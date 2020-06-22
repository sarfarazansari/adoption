export enum UserTypes {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export enum GenderType {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  TRANSGENDER = 'TRANSGENDER'
}

export interface IPhoneDetails {
  countryCode: string;
  dialCode?: string;
  id?: string;
  internationalNumber?: string;
  nationalNumber?: string;
  number: string;
}

export interface ICommonDetails {
  fullName: string;
  phoneNumber: IPhoneDetails;
  dob: string;
  gender: GenderType;
}

export interface IRegisterUser extends ICommonDetails {
  userType: UserTypes;
  picture: string;
  email: string; // only valid and unique email IDs
  password: string;
  address?: string;
  city: string;
  country: string;
  emergencyPhoneNumber: IPhoneDetails;
  isHavingPets?: boolean;
  petsDetails?: string[];
  referral?: string;
  familyMembers?: ICommonDetails[];
  managingFamilies?: string[];
}


export interface ISigninRequest {
  email: string;
  password: string;
}

export interface ISigninResponse extends IRegisterUser {
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
  _id: string;
  guid: string;
  // will add few more data here
}
