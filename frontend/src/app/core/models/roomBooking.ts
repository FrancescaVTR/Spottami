export class RoomBooking {
    constructor (
        public user_id: number,
        public room_id: number,
        public start_booking_date: string,  // DATETIME => YYYY-MM-DD hh:mm:ss
        public end_booking_date: string     // DATETIME => YYYY-MM-DD hh:mm:ss
    ) { }
}