// import { jwtVerify, jwtDecrypt, decodeJwt } from 'jose';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from './constants';
import { jsonResponse } from './utils';

//const { JWK } = require('node-jose')
interface UserJwtPayload {
  jti: string;
  iat: number;
}

export async function verifyAuth(token: string) {
  if (!token) {
    return jsonResponse(401, { error: { message: 'Missing user token' } });
  }
  //const ecPublicKey = await importSPKI(JWT_SECRET_KEY, algorithm);
  //try {
  // const key = await JWK.asKey(JWT_SECRET_KEY, 'pem');

  //return key;
  const verified = await verify(token, JWT_SECRET_KEY);

  return verified;

  //   return verified.payload as UserJwtPayload;
  //}
  //   } catch (err) {
  //     return jsonResponse(401, { error: { message: err } });
  //   }
}
