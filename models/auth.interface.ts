export enum UserTypes {
  SUPER_ADMIN,
  ADMIN,
  USER
}

export enum GenderType {
  MALE,
  FEMALE,
  TRANSGENDER
}

export interface IPhoneDetails {
  countryCode: string;
  number: string;
}

export interface ICommonDetails {
  fullName: string;
  phoneNumber: IPhoneDetails;
  dob: Date;
  gender: GenderType;
}

export interface IRegisterUser extends ICommonDetails {
  userType: UserTypes;
  profileImagePath: URL;
  email: string; // only valid and unique email IDs
  password: string;
  address: string;
  country: string;
  emergencyPhoneNumber: IPhoneDetails;
  isHavingPets: boolean;
  petsDetail?: string[];
  referral?: string;
  isAcceptTermsAndConditions?: boolean;
  familyMembers?: ICommonDetails[];
}


export interface ISigninRequest {
  email: string;
  password: string;
}

export interface IChangePasswordRequest {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface ISigninResponse extends IRegisterUser {
  // jwt token
  token: string;
  // randomly generated unique id
  uid: string;
  // user created date
  createdAt: Date;
  // last updated
  updatedAt: Date;
  // will send an email to confirm the email
  isEmailVerified: boolean;
  // if this is an user it will be assigned to admin or super admin
  // will reference the email here of the manager
  manager?: string;
  // if this is an admin
  isDisabled?: boolean;
  // will add few more data here
}
