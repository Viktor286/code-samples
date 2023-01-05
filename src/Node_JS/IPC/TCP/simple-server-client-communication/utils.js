module.exports = {
  timestamp() {
    return new Date().toLocaleTimeString();
  },

  getNamedPrefix(name) {
    return `[${name}] ${module.exports.timestamp()} `;
  },
};
