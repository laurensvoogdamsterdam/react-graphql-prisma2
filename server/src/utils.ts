import { sign, verify } from "jsonwebtoken";
/**
 *  Token interface
 */
interface Token {
  userId: string;
}

/**
 * Generate unique token.
 * @returns token:string
 */
export const generateToken = async () => {
  return await sign(
    { generatedToken: `${new Date()}` },
    process.env.JWT_SECRET
  );
};

/**
 * Auth middleware, checks for user making use of JWT
 * @param request 
 * @returns Exception if not auth, else continue
 */
export function isAuthenticated(request: any) {
  const authHeader = request.get("Authorization");
  if (authHeader) {
    const token = authHeader.replace("Bearer ", "");
    const verifiedToken = verify(token, process.env.JWT_SECRET) as Token;
    if (Number(verifiedToken.userId)) {
      request.user = Number(verifiedToken.userId);
      return;
    }
    throw Error("Invalid token");
  }
  throw Error("Invalid token");
}
