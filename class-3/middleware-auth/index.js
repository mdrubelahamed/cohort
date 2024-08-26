function verifyJwt(token) {
    try {
        const verifyResponse = jwt.verify(token, jwtPassword);
    } catch (error) {
        console.log("error");
    }
}
const ans = verifyJwt("dd", jwtPassword);

console.log(ans);
