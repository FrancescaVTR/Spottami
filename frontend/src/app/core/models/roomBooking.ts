export class RoomBooking {
    
    public booking_id: number | null = null;

    constructor (
        public user_id: number | undefined,
        public room_id: number | undefined,
        public booking_date: Date,
        public start_time: string,
        public end_time: string
    ) { }
}