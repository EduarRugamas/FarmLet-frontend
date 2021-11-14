export interface ResponseInterface {
    user: string,
    token: Token
};

export interface Token {
  access: Access,
  refresh:Refresh
}

export interface Access {
  token: string,
  expires: string
}

export interface Refresh {
  token: string,
  expires: string
}
