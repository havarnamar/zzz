function queensAttack(n, k, r_q, c_q, obstacles) {
    var needs = [n - r_q, n - c_q, r_q - 1, c_q - 1, Math.min(n - r_q,  c_q - 1), n - Math.max(c_q, r_q), Math.min(c_q, r_q) - 1, Math.min(r_q - 1, n - c_q)] ;
  for (let i of Array.from({ length: k }, (value, index) => index)) {
    let { 0: r_o, 1: c_o } = obstacles[i];

    r_o == r_q &&
      (c_o > c_q
        ? (needs[0] = Math.min(needs[0], c_o - c_q - 1))
        : (needs[2] = Math.min(needs[2], c_q - c_o - 1)));

    c_o == c_q &&
      (r_o > r_q
        ? (needs[1] = Math.min(needs[1], r_o - r_q - 1))
        : (needs[3] = Math.min(needs[3], r_q - r_o - 1)));

    Math.abs(c_o - c_q) == Math.abs(r_o - r_q) &&
      (c_o > c_q && r_o > r_q && (needs[5] = Math.min(needs[5], c_o - c_q - 1)),
      c_o > c_q &&
        r_o < r_q &&
        (needs[7] = Math.min(needs[7], c_o - c_q - 1)),
      c_o < c_q && r_o > r_q && (needs[4] = Math.min(needs[4], c_q - c_o - 1)),
      c_o < c_q &&
        r_o < r_q &&
        (needs[6] = Math.min(needs[6], c_q - c_o - 1)));
  }
  var result = needs.reduce((total, num) => total + num);

  return result;
}
