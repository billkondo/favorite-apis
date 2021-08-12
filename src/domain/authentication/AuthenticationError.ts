class AuthenticationError {}

export class UserNotFound extends AuthenticationError {}
export class WrongPassword extends AuthenticationError {}

export class EmailAlreadyPicked extends AuthenticationError {}
