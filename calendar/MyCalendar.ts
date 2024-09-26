class MyCalendar {
  private bookings: [number, number][];

  constructor() {
    this.bookings = [];
  }

  book(start: number, end: number): boolean {
    for (let [s, e] of this.bookings) {
      // Check for overlap
      if (start < e && end > s) {
        return false;
      }
    }
    this.bookings.push([start, end]); // No overlap, add the booking
    return true;
  }
}
