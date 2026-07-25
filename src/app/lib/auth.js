import { SignJWT, jwtVerify } from "jose";

const secretKey = "abcd"; // use a long env var in real apps
const encodedKey = new TextEncoder().encode(secretKey);

export async function signToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(encodedKey);
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, encodedKey);
    return payload;
  } catch (err) {
    return null;
  }
}