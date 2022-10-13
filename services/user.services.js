const otpGenerator = require("otp-generator");
const crypto = require("crypto");
const key = "verysecretkey";

async function createNewOTP(params, callback) {
  const otp = otpGenerator.generate(4, {
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });
  const ttl = 5 * 60 * 1000;
  const expires = Date.now() + ttl;
  const data = `${params.phone}.${otp}.${expires}`;
  const hash = crypto.createHmac("sha256", key).update(data).digest("hex");
  const fullHash = { data: `${hash}.${expires}`, devpass: otp };

  console.log(`Your OTP is ${otp}. it will expire in 5 minutes`);

  const testopt = otp;
  return callback(null, fullHash, testopt);
}

async function verifyOTP(params, callback) {
  let [hashValue, expires] = params.hash.split(".");
  let now = Date.now();
  if (now > parseInt(expires)) return callback("OTP Expired");
  let data = `${params.phone}.${params.otp}.${expires}`;
  let newCalculatedHash = crypto
    .createHmac("sha256", key)
    .update(data)
    .digest("hex");
  if (newCalculatedHash === hashValue) {
    return callback(null, "Success");
  }
  return callback("Invalid OTP");
}

module.exports = {
  createNewOTP,
  verifyOTP,
};
