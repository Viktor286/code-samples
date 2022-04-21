class ParkingLot {
  constructor(slots) {
    this.slotsLimit = slots;
    this.slotsCounter = 0;
    this.slots = new Map();
    // [index-to-cardId] | map[cardId-to-index]
    this.slotsArr = new Array(slots).fill(null);
  }

  park(cardId) {
    if (this.slots.has(cardId)) {
      return;
    } else {
      if (this.slotsCounter < this.slotsLimit) {
        // Pick the lowers empty slot
        let targetLot;
        for (let i = 0; i < this.slotsLimit; i++) {
          if (this.slotsArr[i] === null) {
            targetLot = i;
            break;
          }
        }

        // Add car to parking lowest lot
        if (targetLot !== null) {
          this.slots.set(cardId, targetLot);
          this.slotsArr[targetLot] = cardId;
          this.slotsCounter++;
          return true;
        }
      } else {
        return false;
      }
    }
  }

  getSlots() {
    return this.slotsArr;
  }

  remove(cardId) {
    if (this.slots.has(cardId)) {
      const slotIndex = this.slots.get(cardId);
      this.slots.delete(cardId);
      this.slotsArr[slotIndex] = null;
      this.slotsCounter--;
      return true;
    } else {
      return false;
    }
  }
}
