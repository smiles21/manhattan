module.exports = function manhattanDistance(p = [], q = []) {
  const pDim = p.length, qDim = q.length;

  if (pDim !== qDim) {
    throw new Error('Input not of equal dimension');
    return;
  }

  if (pDim === 0) {
    throw new Error('Input should not have dimension zero');
    return;
  }

  let result = 0;
  for (let i = 0; i < pDim; i++) {
    result += Math.abs(p[i] - q[i]);
  }

  return result;
};
