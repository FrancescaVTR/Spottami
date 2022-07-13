export class RoomBooking {
    constructor (
        public booking_id: number,
        public user_id: number,
        public room_id: number,
        public booking_date: Date,
        public start_time: string,
        public end_time: string
    ) { }
}