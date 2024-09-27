class MyCalendarTwo {
  private bookings: [number, number][]; // Stores single-booked events
  private overlaps: [number, number][]; // Stores double-booked events

  constructor() {
    this.bookings = [];
    this.overlaps = [];
  }

  book(start: number, end: number): boolean {
    // Check if this new event would cause a triple booking
    for (const [os, oe] of this.overlaps) {
      if (start < oe && end > os) {
        return false; // Triple booking detected, reject the booking
      }
    }

    // Check if this event causes a double booking and track the overlap
    for (const [bs, be] of this.bookings) {
      if (start < be && end > bs) {
        // Add the overlapping part to overlaps list
        this.overlaps.push([Math.max(start, bs), Math.min(end, be)]);
      }
    }

    // No triple booking, so we can safely book this event
    this.bookings.push([start, end]);
    return true;
  }
}
