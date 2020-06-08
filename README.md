# Adoption Clinic

## Models details
Go To [Models](https://github.com/sarfarazansari/adoption/blob/master/models)

# APIs
---

## Auth
for all the auth [Models](https://github.com/sarfarazansari/adoption/blob/master/models/auth.interface.ts)

| Name | Method | Request | Response |
| ------ | ------ | ------ | ------ |
| Register | POST | Refer class `IRegisterUser` | Refer class `ISigninResponse` |
| Login | POST | Refer class `ISigninRequest` | Refer class `ISigninResponse` |
| Change Password | POST | Refer class `IChangePasswordRequest` | Refer class `ISuccessResponse` |
| Forgot Password | POST | Refer class `IForgotPasswordRequest` | Refer class `ISuccessResponse` |
| Logout | POST | Refer class `IForgotPasswordRequest` | Refer class `ISuccessResponse` |
| Verify Email | GET | ---- | ---- |

---------------

## Daily motivational stuff

All the Broadcast [Models](https://github.com/sarfarazansari/adoption/blob/master/models/broadcast.interface.ts)

| Method | Request | Response |
| ------ | ------ | ------ |
| GET | ------ | Paginated response refer class `IGetAllBroadCastRequest` |
| POST | Refer class `IBroadCastRequest` | Refer class `IBroadCastResponse` |
| DELETE | Refer class `IDeleteBroadCastItemRequest` | Refer class `ISuccessResponse` |

------------

## Articles

All the Articles [Models](https://github.com/sarfarazansari/adoption/blob/master/models/article.interface.ts)

| Method | Request | Response |
| ------ | ------ | ------ |
| GET | ------ | Paginated response refer class `IGetAllArticlesRequest` |
| POST | Refer class `ICreateArticleRequest` | Refer class `ICreateArticleResponse` |
| DELETE | Refer class `IDeleteArticleRequest` | Refer class `ISuccessResponse` |

-------------

## Team Members

get  (all and sort by newest created)
post
delete
update

------------

## Families

get  (all and sort by newest created)
post
delete
update

-------------

## Books

get  (all and sort by newest created)
post
delete
update

-------------

## Videos

get  (all and sort by newest created)
post
delete
update

-------------

## Forms

get
post
delete

-------------

## Messages

get  (all and unread)
post
delete

-------------
