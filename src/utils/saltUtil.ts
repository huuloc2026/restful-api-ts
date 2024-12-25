import crypto from "crypto";

export const generateSalt = (length: number = 4): string => {
  return crypto.randomBytes(length).toString("hex");
};

export const verifySalt = (
  value: string,
  hashedValue: string
): boolean => {
  return value === hashedValue;
};

const secret = "my-strong-secret"; // Key chính
const salt = generateSalt(); // Tạo salt ngẫu nhiên

console.log(salt);
console.log("Generated Salt:", salt);

