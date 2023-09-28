export interface AuthenticationModel {
  currency: string
}

export interface Authentication {
  auth (authentication: AuthenticationModel): Promise<string>
}
